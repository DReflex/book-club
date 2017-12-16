import openSocket from 'socket.io-client';

const  socket = openSocket();

export function subscribeComment(cb) {
    socket.on('comment',  (data, id) => {
      return cb(null, data, id)
    })
}

export function subscribeResponse(cb) {
    socket.on('response', (data, id,res_id) => {
      return cb(null, data, id,res_id)
    })
}
