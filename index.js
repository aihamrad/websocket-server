const WebSocket = require('ws');
var randomWords = require('random-words');

const wss = new WebSocket.Server({ host: '0.0.0.0', port: 13000 });

wss.on('connection', function connection(ws) {

        console.log("new connection");
        ws.send('received:Hello, Will send a random Message but you can send whatever you want... :)')
        ws.on('message', function incoming(message) {
            console.log('received: %s', message);
          });

        ws.on('error', function(e) {
                console.log('error', e);
        });

        ws.on('close', function(e) {
                console.log('close', e);
        });

        ws.on('message', (message) => {
          ws.send(`sent:${message}`);
          ws.send(`received:${randomWords({ min: 3, max:10, join: ' '})}`)
        });
      
});


// This code is a simple implementation of a WebSocket server using the WebSocket module. The server listens for incoming connections on 0.0.0.0 at port 13000.

// Upon receiving a new connection, the server logs a message indicating the new connection and sends a message to the client. The server then sets up event listeners to log messages received from the client, errors that occur, and when the connection is closed.

// When a message is received from the client, the server sends a message back to the client acknowledging the received message and sends a random message generated using the random-words module.