const chatResponses = {
    "hello": "Hi there! How can I help you?",
    "how are you": "I'm just a bot, but thanks for asking!",
    "bye": "Goodbye! Have a great day!",
    "how to deposit money": "You can deposit money into a bank account by visiting a local bank branch, using an ATM, or transferring funds electronically through online banking or mobile apps.",
    "common methods for withdrawing money": "You can withdraw money from a bank account by visiting a bank branch, using an ATM, writing a check, or using a debit card for purchases and cash withdrawals.",
    "difference between saving and investing": "Saving involves putting money aside in low-risk, easily accessible accounts like savings accounts, while investing involves putting money into assets like stocks, bonds, or real estate with the goal of generating a higher return over time.",
    "how to start saving money effectively": "To start saving effectively, create a budget, set savings goals, automate your savings, and consider opening a dedicated savings account.",
    "key principles of budgeting": "Budgeting involves tracking your income and expenses, setting spending limits, prioritizing essential expenses, and allocating money for savings and financial goals.",
    "what is a credit score": "A credit score is a numerical representation of your creditworthiness. It's important because it affects your ability to get loans, credit cards, and favorable interest rates.",
    "how to improve my credit score": "You can improve your credit score by paying bills on time, keeping credit card balances low, and regularly checking your credit report for errors.",
    "basic investment options for beginners": "Beginners can consider investment options like mutual funds, exchange-traded funds (ETFs), and starting a retirement account like a 401(k) or an Individual Retirement Account (IRA).",
    "how to protect myself from financial scams": "Protect yourself from financial scams by being cautious of unsolicited offers, not sharing personal information online, and verifying the legitimacy of financial institutions and offers."
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
    for (const key in chatResponses) {
        if (userInput.includes(key)) {
            return chatResponses[key];
        }
    }
    return "I'm sorry, I don't understand that.";
}