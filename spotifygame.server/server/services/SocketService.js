import SocketIO from 'socket.io'
import { logger } from '../utils/Logger'
import { attachHandlers } from '../../Setup'
import { accountService } from './AccountService'
class SocketService {
  // @ts-ignore
  io = SocketIO();
  /**
   * @param {SocketIO.Server} io
   */
  setIO(io) {
    try {
      this.io = io
      // Server listeners
      io.on('connection', this._onConnect())
    } catch (e) {
      logger.error('[SOCKETSTORE ERROR]', e)
    }
  }

  /**
   * @param {SocketIO.Socket} socket
   */
  async authenticate(socket) {
    try {
      const user = "Tim";
      await attachHandlers(this.io, socket, user)
      socket.join(user)
      socket.emit('authenticated', user)
      this.io.emit('UserConnected', user)
    } catch (e) {
      socket.emit('error', e)
    }
  }

  /**
   * Sends a direct message to a user
   * @param {string} userId
   * @param {string} eventName
   * @param {any} payload
   */
  messageUser(userId, eventName, payload) {
    try {
      this.io.to(userId).emit(eventName, payload)
    } catch (e) {
      logger.error('[SOCKET_ERROR] messageUser', e, { userId, eventName, payload })
    }
  }

  messageRoom(room, eventName, payload) {
    this.io.to(room).emit(eventName, payload)
  }

  _onConnect() {
    return socket => {
      this._newConnection(socket)
      socket.on('disconnect', this._onDisconnect(socket))
      socket.on('authenticate', () => this.authenticate(socket))
    }
  }

  _onDisconnect(socket) {
    return () => {
      try {
        if (!socket.userInfo) {
          return
        }
        this.io.emit('UserDisconnected', socket.userInfo.id)
      } catch (e) {}
    }
  }

  _newConnection(socket) {
    // Handshake / Confirmation of Connection
    socket.emit('connected', {
      socket: socket.id,
      message: 'Successfully Connected'
    })
  }
}

const socketService = new SocketService()

export default socketService
