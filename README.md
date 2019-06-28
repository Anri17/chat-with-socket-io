# chat-with-socket-io

My first experince with socket io and web sockets. 

To run it:
  1. have node.js installed
  2. in the command propmpt, navigate the folder of the project
  3. execute the command "npm install" to install all dependencies
  4. execute the command "npm start" to start the server

The server will be running and now you can open the website in a new tab with the following link: "http://localhost:3000/"

Open more than one tab to simulate multile users.

When a new tab is open it asks for a username.

A login message will be sent to the chat, and apear for everyone connected.

Closing the tab will send a disconect event and a logout message apears in the chat for everyone connected.

You can type and sent messages. The username will display, with the message in from of a colon(:).

That is all.
