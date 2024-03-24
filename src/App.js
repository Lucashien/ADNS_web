import React, { useState, useEffect } from 'react';
import './App.css';
import myImage from './img/img.jpg'; // 確保使用正確的路徑


function App() {
  // State for messages and counter
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [counter, setCounter] = useState(0);
  console.log("ini",counter)
  // Increment the counter each time the component mounts
  useEffect(() => {
    setCounter(prev => prev + 1);
  }, []);

  // Handle new message input changes
  const handleNewMessageChange = (event) => {
    setNewMessage(event.target.value);
  };

  // Add a new message to the message board
  const handlePostMessage = () => {
    if (newMessage) {
      setMessages(prevMessages => [...prevMessages, newMessage]);
      setNewMessage('');
    }
  };
  console.log("bef return ",counter)
  return (
    <div className="App">
      <header className="App-header">
        
          <img src={myImage} alt="Your Name" className="App-logo" />
          <p className="App-intro">
            Hi, I'm Tsung Han Hsieh. Welcome to my personal page!
          </p>
          <div className="Visiter-counter">
            Visitor Count: {counter}
          </div>
          
          <div className="App-message-board">
          <h2>Live a Message!</h2>
          <ul className="App-messages">
            {messages.map((message, index) => (
              <li key={index} className="App-message">
                <div className="App-message-text">{message}</div>
              </li>
            ))}
          </ul>

          <div>
            <input
              type="text"
              value={newMessage}
              onChange={handleNewMessageChange}
              placeholder="Type your message here..."
            />
            <button onClick={handlePostMessage}>Send</button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
