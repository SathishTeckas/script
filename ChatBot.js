(function () {
  if (typeof window === 'undefined') return;
  console.log("Chatbot script loaded successfully");

  window.onload = () => {
    const chatbotElement = document.getElementById('chatbot');
    const agentId = chatbotElement ? chatbotElement.getAttribute('data-agent-id') : null;
    const accountId = chatbotElement ? chatbotElement.getAttribute('data-account-id') : null;

    const style = document.createElement('style');
    style.textContent = `
      .chatbot-toggle-btn {
        position: fixed;
        bottom: 100px;
        right: 16px;
        background-color: #22c55e;
        color: white;
        padding: 16px;
        border-radius: 50%;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
        cursor: pointer;
        transition: background-color 0.3s ease;
      }
      .chatbot-toggle-btn:hover {
        background-color: #2563eb;
      }
      .chatbot-container {
        position: fixed;
        bottom: 20px;
        right: 16px;
        max-width: 370px;
        width: 100%;
        height: 600px;
        border: 1px solid #ccc;
        border-radius: 8px;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
        overflow: hidden;
        display: none;
        background-color: white;
      }
      .chatbot-container.tr-lg { border-top-right-radius: 16px; }
      .chatbot-container.tl-lg { border-top-left-radius: 16px; }
      .chatbot-container.br-lg { border-bottom-right-radius: 16px; }
      .chatbot-container.bl-lg { border-bottom-left-radius: 16px; }

      .chatbot-close-btn {
        position: absolute;
        top: 8px;
        right: 8px;
        background-color: #ef4444;
        color: white;
        padding: 8px 12px;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
        font-size: 14px;
        font-weight: bold;
        line-height: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease;
      }
      .chatbot-close-btn::after {
        content: "✖";
        font-size: 18px;
        line-height: 1;
      }
      .chatbot-close-btn:hover {
        background-color: #dc2626;
        transform: scale(1.1);
        box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.15);
      }
      .visible {
        display: block;
      }

      iframe {
        max-width: 370px;
        width: 100%;
        height: 100%;
        border: none;
      }

      /* Responsive styles for mobile devices */
      @media (max-width: 480px) {
        .chatbot-container {
          right: 0;
          left: 0;
          width: 100%;
        }
        .chatbot-toggle-btn {
          right: 16px;
        }
      }
    `;
    document.head.appendChild(style);

    // Create the chatbot toggle button
    const toggleButton = document.createElement('button');
    toggleButton.className = 'chatbot-toggle-btn';
    toggleButton.textContent = 'Chat';
    toggleButton.ariaLabel = 'Toggle Chatbot';
    document.body.appendChild(toggleButton);

    // Create the chatbot container
    const chatbotContainer = document.createElement('div');
    chatbotContainer.className = 'chatbot-container tr-lg tl-lg br-lg bl-lg';
    chatbotContainer.id = 'chatbot-container';

    // Add close button to chatbot container
    const closeButton = document.createElement('button');
    closeButton.className = 'chatbot-close-btn';
    closeButton.ariaLabel = 'Close Chatbot';
    chatbotContainer.appendChild(closeButton);

    // Add iframe to chatbot container
    const iframe = document.createElement('iframe');
    iframe.src = `https://invoicing-ai-agent.vercel.app?agentId=${agentId}&accountId=${accountId}`;
    iframe.title = 'Chatbot';
    chatbotContainer.appendChild(iframe);

    document.body.appendChild(chatbotContainer);

    // Add event listeners
    toggleButton.addEventListener('click', () => {
      chatbotContainer.classList.toggle('visible');
    });

    closeButton.addEventListener('click', () => {
      chatbotContainer.classList.remove('visible');
    });
  };
})();
