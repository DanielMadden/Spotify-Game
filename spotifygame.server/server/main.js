import express from 'express'
import Socket from './services/SocketService'
import Startup from './Startup'
import { logger } from './utils/Logger'
import { clientId, clientSecret } from './SpotifyAuth'
const Qs = require('qs')
const axios = require('axios')
// create server & socketServer
const app = express()
const socketServer = require('http').createServer(app)
// @ts-ignore
const io = require('socket.io')(socketServer)
const port = process.env.PORT || 3000

// Establish Socket
Socket.setIO(io)
Startup.ConfigureGlobalMiddleware(app)
Startup.ConfigureRoutes(app)

// Start Server
socketServer.listen(port, () => {
  logger.log(`[SERVING ON PORT: ${port}]`)
})

const headers = {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  auth: {
    username: clientId,
    password: clientSecret,
  },
};
const data = {
  grant_type: 'client_credentials',
};

let token = "";

async function login()
{

    // @ts-ignore
     const resp = axios.post(
       'https://accounts.spotify.com/api/token',
   
        // @ts-ignore
       Qs.stringify(data),
       headers
     ).then(function(response){                               
      token = response.data.access_token;
  });        

}

login();