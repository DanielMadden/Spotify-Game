import { AppState } from '../AppState'

const { SocketHandler } = require('../utils/SocketHandler')

class SocketService extends SocketHandler {
  constructor() {
    super()
    this
      .on('players:update', this.playersUpdate)
      .on('game:start', this.gameStart)
      .on('log:add', this.logAdd)
  }

  async playersUpdate(players) {
    AppState.players = players
  }

  async gameStart() {
    AppState.startGame = true
  }

  async logAdd(newLog) {
    AppState.log.push(newLog)
  }
}

export const socketService = new SocketService()
