# chat-with-socket-io
## PT (english below)
A minha primeira experiência com socket io e web sockets.

Para executar:
  1. instalar node.js (https://nodejs.org/en/ instalar versão recomendada)
  2. descarregar e colocar o projeto na pasta desejada.
  3. na linha de comandos, navegar até à pasta do projeto
  4. executar o comando ```npm install``` para instalar todas as dependencias
  5. executar o comando ```npm start``` para iniciar o servidor
  
O servidor estará a correr, e poderá entrar no website num novo separador com o seguinte link: "http://localhost:3000/"

Abra mais que um separador para simular vários utilizadores.

Ao abrir um novo separador irá perguntar por um username.

Uma mensagem de login vai ser mandada para o chat, e aparecer para todos os conectados.

Ao chegar o separador irá mandar um event de disconecçao, e aparecerá uma mensagem de logout no chat para todos os que estiverem conectados verem.

Pode escrever e mandar mensagens. o username irá aparecer com a mensagem ao lado, separado por dois pontos(:);

É tudo.

## EN (português em cima)
My first experince with socket io and web sockets. 

To run it:
  1. have node.js installed (https://nodejs.org/en/ install recomended version)
  2. download and place the project in the desired folder.
  3. in the command propmpt, navigate the folder of the project
  4. execute the command "npm install" to install all dependencies
  5. execute the command "npm start" to start the server

The server will be running and now you can open the website in a new tab with the following link: "http://localhost:3000/"

Open more than one tab to simulate multile users.

When a new tab is open it asks for a username.

A login message will be sent to the chat, and apear for everyone connected.

Closing the tab will send a disconect event and a logout message apears in the chat for everyone connected.

You can type and sent messages. The username will display, with the message in from of a colon(:).

That is all.
