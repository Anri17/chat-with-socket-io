const chatBox = document.getElementById("chatBox");

function appendLoginMessage(username) {
    let loginMessage = document.createElement('p');
    loginMessage.innerHTML = `${username} has joined the server`
    chatBox.appendChild(loginMessage);
}

function appendLogoutMessage(username) {
    let disconnectMessage = document.createElement('p');
    disconnectMessage.innerHTML = `${username} has left the server`;
    chatBox.appendChild(disconnectMessage);
}

function appendChatMessage(username, message) {
    let messageBody = document.createElement('p');
    chatBox.appendChild(messageBody);
    messageBody.innerHTML = `${username}: ${message}`;
}

function scrollDivToBottom(id){ 
    let element = document.getElementById(id);
    element.scrollTop = element.scrollHeight;
}