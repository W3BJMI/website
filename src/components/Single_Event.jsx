import React, { useState, useEffect } from "react";
import bg_img1 from '../Images/Event.avif';
import bg_img2 from '../Images/i.avif';

const EventComponent = () => {
  const [time, setTime] = useState({
    days: 45,
    hours: 20,
    minutes: 1,
    seconds: 5,
  });

  const [isRegisterVisible, setIsRegisterVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [bg_img1, bg_img2];

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => {
        let { days, hours, minutes, seconds } = prev;
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
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const carouselInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(carouselInterval);
  }, [images.length]);

  const timeUnits = [
    { label: "Days", value: time.days },
    { label: "Hours", value: time.hours },
    { label: "Min", value: time.minutes },
    { label: "Sec", value: time.seconds },
  ];

  const eventDate = "21 - 24 March 2025";

  return (
    <div className="relative w-full h-screen bg-cover bg-center bg-black overflow-hidden flex flex-col lg:flex-row">
      <div className="absolute w-[400px] h-[400px] bg-purple-700 blur-3xl opacity-20 rounded-full top-[-10px] left-[-50px]"></div>
      <div className="absolute w-[400px] h-[400px] bg-purple-700 blur-3xl opacity-20 rounded-full top-[10px] left-[700px]"></div>

      <div className="lg:w-1/2 w-full p-8 lg:p-20">
        <h1 className="text-6xl lg:text-8xl font-bold bg-gradient-to-b from-purple-300 to-purple-900 bg-opacity-50 bg-clip-text text-transparent">
          CodeBeats
        </h1>
        <p className="text-base lg:text-lg mt-4 max-w-xl text-white">
          A wild mashup of tech innovation, music, and creativity where coders,
          designers, and tech enthusiasts come together for an unforgettable
          experience!
        </p>
        <p className="text-lg lg:text-xl mt-4 font-semibold text-purple-600">
          Event Date : {eventDate}
        </p>
        <div className="flex space-x-4 mt-8">
          {timeUnits.map((unit, index) => (
            <div key={index} className="relative w-12 lg:w-16 h-12 lg:h-16 perspective">
              <div
                className="absolute w-full h-full transition-transform duration-500"
                style={{ transform: `rotateX(${unit.value * 360}deg)` }}
              >
                <div className="absolute w-full h-full bg-gradient-to-b from-purple-300 to-purple-900 text-black rounded-lg flex flex-col items-center justify-center shadow-lg">
                  <span className="text-xl lg:text-3xl font-bold">{unit.value}</span>
                  <span className="text-xs lg:text-sm">{unit.label}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={() => setIsRegisterVisible(true)}
          className="mt-8 px-6 lg:px-8 py-3 lg:py-4 bg-transparent border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition duration-300"
        >
          Get Your Tickets
        </button>
      </div>

      <div className="lg:w-1/2 w-full flex items-center justify-center lg:mt-0 mt-8">
        <div className="w-80 h-80 bg-gradient-to-b from-purple-300 to-purple-500 rounded-lg shadow-2xl overflow-hidden">
          <img
            src={images[currentIndex]}
            alt={`Creative Display ${currentIndex + 1}`}
            className="w-full h-full object-cover transition-all duration-500"
          />
        </div>
      </div>

      {isRegisterVisible && (
        <div className="absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center">
          <div className="h-40 w-40 pb-5 border-2 bg-white flex items-center justify-center">
            <img src="your-qr-code.png" alt="QR Code" />
          </div>
          <br />
          <button className="px-8 py-4 bg-gradient-to-b from-purple-300 to-purple-500 text-white font-semibold rounded-lg hover:bg-purple-900 transition duration-300">
            Register
          </button>
        </div>
      )}
    </div>
  );
};

export default EventComponent;
