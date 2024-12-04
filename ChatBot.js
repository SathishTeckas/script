(function () {
    // Add styles dynamically
    if (typeof window === 'undefined') return;
    console.log("Chatbot script loaded successfully");
// Additional JavaScript code for your chatbot
window.onload = () => {
    const chatbotElement = document.getElementById('chatbot');
    // Retrieve the data-agent-id attribute from the script tag
    const agentId = chatbotElement ? chatbotElement.getAttribute('data-agent-id') : null;
    const accountId = chatbotElement ? chatbotElement.getAttribute('data-account-id') : null;
   // alert(`Agent ID: ${agentId}`);

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
        bottom: 0;
        right: 0;
        width: 100%;
        height: 100%;
        border: none;
        border-radius: 0;
         box-shadow: none;
        overflow: hidden;
        display: none;
        background-color: white;
        margin: 0;
        padding: 0;
      }
      .chatbot-close-btn {
        position: absolute;
        top: 8px;
        right: 8px;
        background-color: #ef4444;
        color: white;
        padding: 8px;
        border-radius: 50%;
        cursor: pointer;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
        transition: background-color 0.3s ease;
      }
      .chatbot-close-btn:hover {
        background-color: #dc2626;
      }
      .visible {
        display: block;
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
    chatbotContainer.className = 'chatbot-container';
    chatbotContainer.id = 'chatbot-container';
  
    // Add close button to chatbot container
    const closeButton = document.createElement('button');
    closeButton.className = 'chatbot-close-btn';
    closeButton.textContent = 'X';
    closeButton.ariaLabel = 'Close Chatbot';
    chatbotContainer.appendChild(closeButton);
  
    // Add iframe to chatbot container
    const iframe = document.createElement('iframe');
    iframe.src = `https://invoicing-ai-agent.vercel.app?agentId=${agentId}&accountId=${accountId}`; // Replace with your chatbot's URL
    iframe.title = 'Chatbot';
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.border = 'none';
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
  
