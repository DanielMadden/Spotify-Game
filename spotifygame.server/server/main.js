import express from 'express'
import Socket from './services/SocketService'
import Startup from './Startup'
import { logger } from './utils/Logger'
// create server & socketServer
const app = express()
const socketServer = require('http').createServer(app)
// @ts-ignore
const io = require('socket.io')(socketServer)
const port = process.env.PORT || 3000

// Establish Socket
Socket.setIO(io)
Startup.SpotifyAuth()
Startup.ConfigureGlobalMiddleware(app)
Startup.ConfigureRoutes(app)

// Start Server
socketServer.listen(port, () => {
  logger.log(`[SERVING ON PORT: ${port}]`)
})