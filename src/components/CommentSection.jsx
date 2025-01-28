import { useState } from 'react';

export function CommentSection() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [statusMessage, setStatusMessage] = useState('');
    const [statusType, setStatusType] = useState(''); // 'success' or 'error'

    // Regular expression to validate email format
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Handle form input changes
    const handleNameChange = (e) => setName(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handleMessageChange = (e) => setMessage(e.target.value);

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check if all fields are filled
        if (!name || !email || !message) {
            setStatusMessage('Please fill in all fields.');
            setStatusType('error');
            return;
        }

        // Check if email is valid
        if (!emailRegex.test(email)) {
            setStatusMessage('Please enter a valid email address.');
            setStatusType('error');
            return;
        }

        // Create the payload
        const payload = {
            name,
            email,
            message,
        };

        try {
            const response = await fetch('https://w3b-backend-mkky.vercel.app/api/comments/sendComments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            const data = await response.json();

            if (response.ok) {
                setStatusMessage('Your message has been sent successfully!');
                setStatusType('success');
                
                // Clear the form fields
                setName('');
                setEmail('');
                setMessage('');
            } else {
                setStatusMessage(data.error || 'Failed to send email');
                setStatusType('error');
            }
        } catch (error) {
            console.error('Error sending email:', error);
            setStatusMessage('An error occurred. Please try again later.');
            setStatusType('error');
        }
    };

    return (
        <div className="bg-black flex justify-evenly pb-16 pt-24">
            <div className="relative font-framer text-[156px] bg-black pb-80"> 
                <div className="absolute text-white top-0">
                    Let's
                </div>
                <div className="absolute text-blueColor top-[106px]">
                    Talk!
                </div>
            </div>
            <div className="relative text-white font-framer ml-96">
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="Name"
                            value={name}
                            onChange={handleNameChange}
                            className="bg-zinc-600 focus:outline-none w-[28rem] h-12 pl-4 rounded-2xl"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="Email"
                            value={email}
                            onChange={handleEmailChange}
                            className="bg-zinc-600 focus:outline-none w-[28rem] h-12 pl-4 rounded-2xl"
                        />
                    </div>
                    <div className="mb-2">
                        <textarea
                            placeholder="Message"
                            value={message}
                            onChange={handleMessageChange}
                            className="bg-zinc-600 min-h-32 pt-3 pr-4 max-h-72 focus:outline-none w-[28rem] h-12 pl-4 rounded-2xl"
                        />
                    </div>
                    <div className="text-black font-semibold">
                        <button
                            type="submit"
                            className="bg-blueColor font-framer w-[28rem] h-12 rounded-2xl"
                        >
                            Send
                        </button>
                    </div>
                </form>

                {/* Display the status message */}
                {statusMessage && (
                    <div
                        className={`mt-4 p-4 text-black font-framer w-[28rem] h-12 rounded-2xl ${
                            statusType === 'success' ? 'bg-blueColor' : 'bg-red-600'
                        }`}
                    >
                        {statusMessage}
                    </div>
                )}
            </div>
        </div>
    );
}
