import { useState, useEffect, useRef } from "react";
import { useUser } from "./UserContext";
import './Chat.css';

type Message = {
  id: number;
  text: string;
  sender: string;
};

export const Chat = () => {
  const { username } = useUser();

  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hello!", sender: "KP" },
    { id: 2, text: "Hi! How are you?", sender: "Manu" },
    { id: 3, text: "I'm fine, thanks!", sender: "KP" },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const chatBoxRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const sendMessage = () => {
    if (!newMessage.trim()) return;
    const message: Message = {
      id: Date.now(),
      text: newMessage,
      sender: username,
    };
    setMessages((prev) => [...prev, message]);
    setNewMessage("");
  };

  return (
    <div className="container">
      <div ref={chatBoxRef} className="chatBox">
        {messages.map((msg) => (
          <div
            key={msg.id}
             className={`message ${
              msg.sender === username ? "message-own" : "message-other"
            }`}
          >
            <strong>{msg.sender}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <div className="input-box">
        <input
          ref={inputRef}
          type="text"
          value={newMessage}
          placeholder="Type a message..."
          onChange={(e) => setNewMessage(e.target.value)}
          className="input"
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button onClick={sendMessage} className="button">
          Send
        </button>
      </div>
    </div>
  );
};


