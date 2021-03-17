import BaseController from '../utils/BaseController'
import { roomService } from '../services/RoomService'

export class RoomController extends BaseController {
  constructor() {
    super('api/room')
    this.router
      .post('', this.create)
  }

  async create(req, res, next) {
    try {
      await roomService.create(req.body)
      res.status(201)
    } catch (error) {
      next(error)
    }
  }
}
