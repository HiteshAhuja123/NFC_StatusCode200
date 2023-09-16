const chatResponses = {
    "hello": "Hi there! How can I help you?",
    "how are you": "I'm just a bot, but thanks for asking!",
    "bye": "Goodbye! Have a great day!",
    "How do I deposit money into a bank account?":
        "You can deposit money into a bank account by visiting a local bank branch, using an ATM, or transferring funds electronically through online banking or mobile apps.",

    "What are the common methods for withdrawing money from a bank account?":
        "You can withdraw money from a bank account by visiting a bank branch, using an ATM, writing a check, or using a debit card for purchases and cash withdrawals.",

    "What is the difference between saving and investing?":
        "Saving involves putting money aside in low-risk, easily accessible accounts like savings accounts, while investing involves putting money into assets like stocks, bonds, or real estate with the goal of generating a higher return over time.",

    "How can I start saving money effectively?":
        "To start saving effectively, create a budget, set savings goals, automate your savings, and consider opening a dedicated savings account.",

    "What are the key principles of budgeting?":
        "Budgeting involves tracking your income and expenses, setting spending limits, prioritizing essential expenses, and allocating money for savings and financial goals.",

    "What is a credit score, and why is it important?":
        "A credit score is a numerical representation of your creditworthiness. It's important because it affects your ability to get loans, credit cards, and favorable interest rates.",

    "How can I improve my credit score?":
        "You can improve your credit score by paying bills on time, keeping credit card balances low, and regularly checking your credit report for errors.",

    "What are some basic investment options for beginners?":
        "Beginners can consider investment options like mutual funds, exchange-traded funds (ETFs), and starting a retirement account like a 401(k) or an Individual Retirement Account (IRA).",

    "How can I protect myself from financial scams?":
        "Protect yourself from financial scams by being cautious of unsolicited offers, not sharing personal information online, and verifying the legitimacy of financial institutions and offers."
};

function sendMessage() {
    const userInput = document.getElementById("user-input").value;
    const chatMessages = document.getElementById("chat-messages");
    const newMessage = document.createElement("div");

    // Display user message
    newMessage.innerHTML = `<strong>You:</strong> ${userInput}`;
    chatMessages.appendChild(newMessage);

    // Get bot response
    const botResponse = getBotResponse(userInput);

    // Display bot response
    const botMessage = document.createElement("div");
    botMessage.innerHTML = `<strong>Chatbot:</strong> ${botResponse}`;
    chatMessages.appendChild(botMessage);

    // Clear input field
    document.getElementById("user-input").value = "";
}

function getBotResponse(userInput) {
    userInput = userInput.toLowerCase();
    if (chatResponses.hasOwnProperty(userInput)) {
        return chatResponses[userInput];
    } else {
        return "I'm sorry, I don't understand that.";
    }
}