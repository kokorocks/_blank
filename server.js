import Peer from 'https://cdn.jsdelivr.net/npm/peerjs@1.4.0/dist/peerjs.min.js';

// Create a new Peer instance
const peers = new Peer();

peer.on('open', (id) => {
    console.log(`My peer ID is: ${id}`);
});
peer.on('connection', (connection) => {
    conn = connection;
    conn.on('data', (data) => {null
    });
});
