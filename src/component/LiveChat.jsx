import React, { useEffect, useState } from 'react'
// import io from 'socket.io-client';
// const socket = io('http://localhost:5000');

const Livechat = () => {

  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [username, setUsername] = useState('');

  // useEffect(() => {
  //   // Receive chat messages from server
  //   socket.on('chatMessage', (messageData) => {
  //     setMessages((prevMessages) => [...prevMessages, messageData]);
  //   });

  //   return () => {
  //     socket.off('chatMessage');
  //   };
  // }, []);

  const sendMessage = () => {
    if (message && username) {
      const messageData = { sender, text: message, timestamp: new Date() };
      // socket.emit('chatMessage', messageData); // Send message to server
      setMessage(''); // Clear input field
    }
  };


  return (
    <div className="chat-container bg-gray-100 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-blue-700 mb-4">Live Chat</h2>

      {/* Messages List */}
      <div className="chat-messages bg-white p-4 mb-4 h-64 overflow-y-auto rounded">
        {messages.map((msg, index) => (
          <div key={index} className="message mb-2">
            <span className="font-bold">{msg.username}: </span>
            <span>{msg.text}</span>
            <div className="text-xs text-gray-400">
              {new Date(msg.timestamp).toLocaleTimeString()}
            </div>
          </div>
        ))}
      </div>

      {/* Input for Message */}
      <input
        type="text"
        placeholder="Sender"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="p-2 mr-2 border rounded"
      />
      <input
        type="text"
        placeholder="Type your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="p-2 flex-grow border rounded"
      />
      <button
        onClick={sendMessage}
        className="bg-blue-600 text-white px-4 py-2 ml-2 rounded"
      >
        Send
      </button>
    </div>
  );
}

export default Livechat