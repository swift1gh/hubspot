import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { IoSend } from "react-icons/io5";
import { IoChatbubbleEllipses } from "react-icons/io5";

const ChatBox = () => {
  const predefinedQA = [
    {
      question: "What features does your CRM offer?",
      answer:
        "Our CRM includes contact management, deal tracking, email marketing integration, sales pipeline visualization, and automated workflow tools. Plus, it's completely free to start!",
    },
    {
      question: "How can I integrate your CRM with my existing tools?",
      answer:
        "Our CRM seamlessly integrates with popular tools like Gmail, Outlook, Slack, and over 1,000+ apps through our App Marketplace. We also provide API access for custom integrations.",
    },
    {
      question: "Is there a free trial available?",
      answer:
        "Yes! We offer a free-forever starter CRM plan with all essential features. You can upgrade to our professional or enterprise plans as your business grows.",
    },
    {
      question: "How does your pricing work?",
      answer:
        "Our pricing is based on the features you need and the number of users. The starter CRM is free, Professional starts at $45/month, and Enterprise at $1,200/month.",
    },
    {
      question: "Can I migrate data from my current CRM?",
      answer:
        "Yes, we provide comprehensive data migration tools and dedicated support to help you transfer your contacts, deals, and other data from your existing CRM system.",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      text: "Hi there! 👋 Choose a question below or type your own:",
      isUser: false,
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const sendMessage = (text, isPrewritten = false) => {
    if (!isPrewritten) {
      text.preventDefault();
      text = inputMessage.trim();
    }

    if (text) {
      setMessages((prev) => [...prev, { text, isUser: true }]);
      setInputMessage("");

      // Find matching predefined answer or use default response
      const matchingQA = predefinedQA.find((qa) => qa.question === text);
      const response = matchingQA
        ? matchingQA.answer
        : "Thanks for your message! Our team will get back to you soon.";

      setTimeout(() => {
        setMessages((prev) => [...prev, { text: response, isUser: false }]);
      }, 1000);
    }
  };

  return (
    <>
      {/* Chat Bubble */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-hubspot-orange to-orange-500 
                     rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform 
                     duration-200 z-50">
          <IoChatbubbleEllipses className="text-white text-2xl" />
        </button>
      )}

      {/* Chat Window */}
      <div
        className={`fixed bottom-6 right-6 w-96 bg-white rounded-lg shadow-xl z-50 
                      transition-all duration-300 transform ${
                        isOpen ? "scale-100" : "scale-0"
                      }`}>
        {/* Header */}
        <div className="bg-gradient-to-r from-hubspot-orange to-orange-500 p-4 rounded-t-lg flex justify-between items-center">
          <h3 className="text-white font-semibold">Chat Support</h3>
          <button
            onClick={() => setIsOpen(false)}
            className="text-white hover:text-gray-200 transition-colors">
            <IoClose className="text-xl" />
          </button>
        </div>

        {/* Messages */}
        <div className="h-72 overflow-y-auto p-4 space-y-4">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex ${
                msg.isUser ? "justify-end" : "justify-start"
              }`}>
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                  msg.isUser
                    ? "bg-gradient-to-r from-hubspot-orange to-orange-500 text-white"
                    : "bg-gray-100 text-gray-800"
                }`}>
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        {/* Predefined Questions */}
        <div className="px-4 py-2 border-t border-b max-h-40 overflow-y-auto">
          <p className="text-sm text-gray-500 mb-2">Common Questions:</p>
          <div className="space-y-2">
            {predefinedQA.map((qa, idx) => (
              <button
                key={idx}
                onClick={() => sendMessage(qa.question, true)}
                className="text-left text-sm text-gray-700 hover:bg-gray-100 p-2 rounded-lg w-full transition-colors">
                {qa.question}
              </button>
            ))}
          </div>
        </div>

        {/* Input */}
        <form onSubmit={sendMessage} className="p-4 border-t">
          <div className="flex space-x-2">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-hubspot-orange/50"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-hubspot-orange to-orange-500 text-white p-2 rounded-full
                       hover:shadow-lg transition-shadow duration-200">
              <IoSend className="text-xl" />
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ChatBox;
