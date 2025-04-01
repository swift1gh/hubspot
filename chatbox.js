import { getResponse, botResponses } from "./hubbot-responses.js";

document.addEventListener("DOMContentLoaded", function () {
  // Create chat elements
  const chatHTML = `
    <div class="chat-bubble" id="chat-bubble">
      <i class="fas fa-comment"></i>
    </div>
    
    <div class="chat-container hidden" id="chat-container">
      <div class="chat-header">
        <h3>Chat Support</h3>
        <div class="chat-controls">
          <button id="minimize-chat"><i class="fas fa-minus"></i></button>
          <button id="close-chat"><i class="fas fa-times"></i></button>
        </div>
      </div>
      <div class="chat-body" id="chat-body">
        <div class="chat-message agent-message">
          Hello! How can I help you today?
        </div>
      </div>
      <div class="chat-footer">
        <input type="text" class="chat-input" id="chat-input" placeholder="Type your message...">
        <button class="send-button" id="send-message">
          <i class="fas fa-paper-plane"></i>
        </button>
      </div>
    </div>
  `;

  // Append chat HTML to body
  const chatElement = document.createElement("div");
  chatElement.innerHTML = chatHTML;
  document.body.appendChild(chatElement);

  // Get DOM elements
  const chatBubble = document.getElementById("chat-bubble");
  const chatContainer = document.getElementById("chat-container");
  const minimizeButton = document.getElementById("minimize-chat");
  const closeButton = document.getElementById("close-chat");
  const chatBody = document.getElementById("chat-body");
  const chatInput = document.getElementById("chat-input");
  const sendButton = document.getElementById("send-message");

  // Event listeners
  chatBubble.addEventListener("click", function () {
    chatBubble.classList.add("hidden");
    chatContainer.classList.remove("hidden");
  });

  minimizeButton.addEventListener("click", function () {
    chatContainer.classList.add("minimized");
    chatBubble.classList.remove("hidden");
    chatContainer.classList.add("hidden");
  });

  closeButton.addEventListener("click", function () {
    chatContainer.classList.add("hidden");
    chatBubble.classList.remove("hidden");
  });

  function createTypingIndicator() {
    const typing = document.createElement("div");
    typing.className = "typing-indicator";
    for (let i = 0; i < 3; i++) {
      const dot = document.createElement("div");
      dot.className = "typing-dot";
      typing.appendChild(dot);
    }
    return typing;
  }

  function addMessage(message, isUser) {
    const messageDiv = document.createElement("div");
    messageDiv.className = `chat-message ${
      isUser ? "user-message" : "agent-message"
    }`;
    messageDiv.textContent = message;
    chatBody.appendChild(messageDiv);
    chatBody.scrollTop = chatBody.scrollHeight;
  }

  function sendMessage() {
    const message = chatInput.value.trim();
    if (message !== "") {
      // Add user message
      addMessage(message, true);

      // Clear input
      chatInput.value = "";

      // Show typing indicator
      const typingIndicator = createTypingIndicator();
      chatBody.appendChild(typingIndicator);

      // Simulate response delay
      setTimeout(() => {
        // Remove typing indicator
        typingIndicator.remove();

        // Add bot response
        const response =
          "Thanks for your message. Our team will get back to you soon.";
        addMessage(response, false);
      }, 1000);
    }
  }

  sendButton.addEventListener("click", sendMessage);

  chatInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      sendMessage();
    }
  });
});
