import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:5000');

const reciveMessage = cb => {
    socket.on('message', line => cb(line));
};

const emmitMessage = line => {
    socket.emit('message', line);
};

export {reciveMessage, emmitMessage};