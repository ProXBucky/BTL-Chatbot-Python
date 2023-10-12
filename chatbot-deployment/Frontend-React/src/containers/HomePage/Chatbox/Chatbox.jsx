import { useState } from "react";
import "./style.css"

export default function Chatbox() {

    const [state, setState] = useState(false)
    const [messages, setMessages] = useState([])
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
            let msg1 = { name: "User", message: userMessage };
            setMessages((prevMessages) => {
                return [...prevMessages, msg1];
            });

            const response = await fetch('http://127.0.0.1:5000/predict', {
                method: 'POST',
                body: JSON.stringify({ message: userMessage }),
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                },
            });

            if (response.ok) {
                const data = await response.json();
                let msg2 = { name: "Sam", message: data.answer };
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
        <div className="container" >
            <div className='chatbox'>
                <div className={`chatbox__support ${state ? 'chatbox--active' : ''}`}>
                    <div className="chatbox__header">
                        <div className="chatbox__image--header">
                            <img src="https://img.icons8.com/color/48/000000/circled-user-female-skin-type-5--v1.png" alt="image" />
                        </div>
                        <div className="chatbox__content--header">
                            <h4 className="chatbox__heading--header">Chat support</h4>
                            <p className="chatbox__description--header">Hi. My name is Sam. How can I help you?</p>
                        </div>
                    </div>

                    <div className="chatbox__messages">
                        {reversedMessages.map((message, index) => (
                            <div key={index} className={`messages__item ${message.name === 'Sam' ? 'messages__item--visitor' : 'messages__item--operator'}`}>
                                {message.message}
                            </div>
                        ))}
                    </div>

                    <div className="chatbox__footer">
                        <input type="text" placeholder="Write a message..." value={userMessage} onChange={(e) => setUserMessage(e.target.value)} onKeyDown={handleKeyDown} />
                        <button className="chatbox__send--footer send__button" onClick={onSendButton}><i className="fa-solid fa-paper-plane fa-lg"></i></button>
                    </div>
                </div>
                <div className="chatbox__button">
                    <button onClick={toggleState} className="hover:scale-95"><img src="/chatbox-icon.svg" /></button>
                </div>
            </div>
        </div >
    )

}

