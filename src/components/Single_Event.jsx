import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";


const EventComponent = () => {
  const { id } = useParams();
  const [eventData, setEventData] = useState({ event: null, time: null });
  const [currentIndex, setCurrentIndex] = useState(0);

  const fetchEventData = useCallback(async () => {
    try {
      const response = await axios.get(
        `https://w3b-backend-mkky.vercel.app/api/events/getEvent/${id}`
      );
      const eventData = response.data;

      const deadlineDate = new Date(eventData.formDeadline).getTime();
      const currentTime = Date.now();
      const remainingTime = Math.max(deadlineDate - currentTime, 0);

      const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (remainingTime % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

      setEventData({
        event: eventData,
        time: { days, hours, minutes, seconds },
        isDeadlinePassed: currentTime > deadlineDate, // Add a flag to check if the deadline has passed
      });
    } catch (error) {
      console.error("Error fetching event data:", error);
    }
  }, [id]);

  useEffect(() => {
    fetchEventData();
  }, [fetchEventData]);

  useEffect(() => {
    if (!eventData.time) return;

    const timer = setInterval(() => {
      setEventData((prevState) => {
        if (!prevState.time || prevState.time.days <= 0) return prevState;

        let { days, hours, minutes, seconds } = prevState.time;
        seconds--;
        if (seconds < 0) {
          seconds = 59;
          minutes--;
        }
        if (minutes < 0) {
          minutes = 59;
          hours--;
        }
        if (hours < 0) {
          hours = 23;
          days--;
        }

        return {
          ...prevState,
          time: { days, hours, minutes, seconds }
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [eventData.time]);

  useEffect(() => {
    if (!eventData.event?.imageUrls?.length) return;

    const carouselInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % eventData.event.imageUrls.length);
    }, 3000);

    return () => clearInterval(carouselInterval);
  }, [eventData.event?.imageUrls]);

  if (!eventData.event || !eventData.time) {
    return <div className="text-white text-center">Loading...</div>;
  }

  const timeUnits = [
    { label: "Days", value: eventData.time.days },
    { label: "Hours", value: eventData.time.hours },
    { label: "Min", value: eventData.time.minutes },
    { label: "Sec", value: eventData.time.seconds },
  ];

  return (
    <div className="relative w-full h-screen bg-cover bg-center bg-black overflow-hidden flex flex-col lg:flex-row">
      <div className="absolute w-[400px] h-[400px] bg-purple-700 blur-3xl opacity-20 rounded-full top-[-10px] left-[-50px]"></div>
      <div className="absolute w-[400px] h-[400px] bg-purple-700 blur-3xl opacity-20 rounded-full top-[10px] left-[700px]"></div>

      <div className="lg:w-1/2 w-full p-8 lg:p-20">
        <h1 className="text-6xl lg:text-8xl font-bold bg-gradient-to-b from-purple-300 to-purple-900 bg-opacity-50 bg-clip-text text-transparent">
          {eventData.event.title}
        </h1>
        <p className="text-base lg:text-lg mt-4 max-w-xl text-white">
          {eventData.event.description}
        </p>
        <p className="text-lg lg:text-xl mt-4 font-semibold text-purple-600">
          Form Deadline: {new Date(eventData.event.formDeadline).toLocaleDateString()}
        </p>

        {/* Countdown Timer */}
        <div className="flex space-x-4 mt-8">
          {timeUnits.map((unit, index) => (
            <div
              key={index}
              className="w-12 lg:w-16 h-12 lg:h-16 bg-gradient-to-b from-purple-300 to-purple-900 text-black rounded-lg flex flex-col items-center justify-center shadow-lg"
            >
              <span className="text-xl lg:text-3xl font-bold">{unit.value}</span>
              <span className="text-xs lg:text-sm">{unit.label}</span>
            </div>
          ))}
        </div>

        {/* Register Now Button */}
        {!eventData.isDeadlinePassed && (
          <div className="mt-6 flex ">
            <a
              href={eventData.event.qrUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 lg:px-8 py-3 lg:py-4 bg-transparent border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition duration-300"
            >
              Register Now
            </a>
          </div>
        )}
      </div>

      <div className="lg:w-1/2 w-full flex items-center justify-center lg:mt-0 mt-8">
        <div className="w-80 h-80 bg-gradient-to-b from-purple-300 to-purple-500 rounded-lg shadow-2xl overflow-hidden">
          <img
            src={eventData.event.imageUrls[currentIndex]}
            alt={`Event Image ${currentIndex + 1}`}
            className="w-full h-full object-cover transition-all duration-500"
          />
        </div>
      </div>
    </div>
  );
};

export default EventComponent;