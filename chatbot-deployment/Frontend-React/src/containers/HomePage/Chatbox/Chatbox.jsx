import { useState } from "react";
import "./style.css"

export default function Chatbox() {

    const formatDate = () => {
        const date = new Date(); // Create a Date object with the current date and time
        // Extract the individual date and time components
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Month is zero-based, so add 1
        const year = date.getFullYear();
        const formattedDate = `${hours}:${minutes} ${day}/${month}/${year}`;
        return formattedDate

    }

    const [state, setState] = useState(false)
    const [messages, setMessages] = useState([{ name: "Sam", message: 'Hi. My name is Sam. How can I help you? ', time: formatDate() }])
    const [userMessage, setUserMessage] = useState('');

    const toggleState = () => {
        setState(!state)
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            onSendButton();
        }
    }

    const handleSendMessage = async () => {
        if (userMessage === "") {
            return;
        }

        try {
            let msg1 = { name: "User", message: userMessage, time: formatDate() };
            setMessages((prevMessages) => {
                return [...prevMessages, msg1];
            });

            const response = await fetch(`${import.meta.env.VITE_BACKEND_PORT}/predict`, {
                method: 'POST',
                body: JSON.stringify({ message: userMessage }),
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                },
            });

            if (response.ok) {
                const data = await response.json();
                let msg2 = { name: "Sam", message: data.answer, time: formatDate() };
                setMessages((prevMessages) => {
                    return [...prevMessages, msg2];
                });
                setUserMessage('');
            } else {
                console.error('Error:', response.status);
                setUserMessage('');
            }
        } catch (error) {
            console.error('Error:', error);
            setUserMessage('');
        }
    }


    const onSendButton = () => {
        handleSendMessage()
    }

    const reversedMessages = [...messages].reverse();

    return (
        <div className="container border-8" >
            <div className='chatbox'>
                <div className={`chatbox__support ${state ? 'chatbox--active' : ''}`}>
                    <div className="chatbox__header">
                        <div className="chatbox__image--header">
                            <img src="../../../../public/robot_head.svg" className="h-full w-full scale-[4.5]" alt="image" />
                        </div>
                        <div className="chatbox__content--header">
                            <h4 className="chatbox__heading--header">Sam from The Coffee House</h4>
                            <p className="chatbox__description--header">I'm here to assist you!</p>
                        </div>
                    </div>

                    <div className="chatbox__messages">
                        {reversedMessages.map((message, index) => (
                            <div>
                                <div key={index} className={`messages__item ${message.name === 'Sam' ? 'messages__item--visitor' : 'messages__item--operator'}`}>
                                    {message.message}
                                </div>
                                <div className={`text-gray-600 text-sm ${message.name === 'Sam' ? 'text-left' : 'text-right'}`}>{message.time}</div >
                            </div>
                        ))}
                    </div>

                    <div className="chatbox__footer">
                        <input type="text" placeholder="Write a message..." value={userMessage} onChange={(e) => setUserMessage(e.target.value)} onKeyDown={handleKeyDown} />
                        <button className="chatbox__send--footer send__button" onClick={onSendButton}><i className="fa-solid fa-paper-plane fa-lg"></i></button>
                    </div>
                </div>
                <div className="chatbox__button">
                    <button onClick={toggleState} className="hover:scale-95 h-16 w-16">
                        {
                            !state ? <img src="/chatbox-icon.svg" /> : <i className="text-black fa-solid fa-x fa-2xl"></i>
                        }
                    </button>
                </div>
            </div>
        </div >
    )

}

