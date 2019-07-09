const socket = io.connect();
const messageForm = document.getElementById('messageSubmit');
let messageInput = document.getElementById('messageInput');
let name;
do {
    name = prompt("Write your username please");
} while(name == null || name == undefined || name == '');

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
    if (document.getElementById('chat_messages').scrollTop >= document.getElementById('chat_messages').scrollHeight - 900) scrollDivToBottom('chat_messages');
});

// Logout Event
socket.on('disconect', () => {
    socket.disconnect();
});

socket.on('userDisconected', (disconnectUser) => {
    appendLogoutMessage(disconnectUser);
});
