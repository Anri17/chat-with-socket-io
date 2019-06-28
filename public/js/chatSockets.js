const socket = io.connect();
const messageForm = document.getElementById('messageSubmit');
let messageInput = document.getElementById('messageInput');
let name = prompt("Write your username please");

// Login Event
appendLoginMessage(name);
socket.emit('newUserLogin', name);

socket.on('newUserLoginAnouncement', (username) => {
    appendLoginMessage(username);
});

// Message Submittion Event
messageForm.addEventListener('submit', e => {
    e.preventDefault();
    socket.emit('chatMessageSubmit', messageInput.value);
    messageInput.value = '';
});

socket.on('chatMessage', (message, username) => {
    appendChatMessage(username, message);
});

// Logout Event
socket.on('disconect', () => {
    socket.disconnect();
});

socket.on('userDisconected', (disconnectUser) => {
    appendLogoutMessage(disconnectUser);
});
