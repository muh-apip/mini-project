import React, { useState } from "react";
import { getAIResponse } from "../services/chatAIService"; // Import fungsi dari service

function ChatWeatherBot({ weather }) {
  const [inputUser, setInputUser] = useState("");
  const [messages, setMessages] = useState([]);

  function handleChange(e) {
    setInputUser(e.target.value);
  }

  async function handlePromptSubmit() {
    const newMessages = [...messages, { sender: "user", text: inputUser }];
    setMessages(newMessages);

    try {
      const aiResponse = await getAIResponse(weather, inputUser);
      setMessages([...newMessages, { sender: "ai", text: aiResponse }]);
      setInputUser("");
    } catch (error) {
      setMessages([
        ...newMessages,
        { sender: "ai", text: error.message },
      ]);
    }
  }

  return (
    <div className="h-screen flex flex-col items-center bg-gray-50 p-6">
      <h2 className="text-2xl font-semibold mb-4">Chat Wheater Bot AI</h2>
      <div className="flex flex-col w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="flex-grow overflow-y-auto p-6 bg-gray-100">
          {messages.map((message, index) => (
            <div key={index} className={`mb-4 ${message.sender === "user" ? "text-right" : "text-left"}`}>
              <p className={`inline-block p-3 rounded-lg ${message.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-300"}`}>
                {message.text}
              </p>
            </div>
          ))}
        </div>
        <div className="flex items-center bg-gray-200 p-4">
          <input
            type="text"
            value={inputUser}
            onChange={handleChange}
            className="flex-grow p-3 rounded-l-lg border focus:outline-none"
            placeholder="Masukkan hobi Anda..."
          />
          <button
            onClick={handlePromptSubmit}
            className="p-3 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600"
          >
            Kirim
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatWeatherBot;
