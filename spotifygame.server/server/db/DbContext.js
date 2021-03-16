import mongoose from 'mongoose'
import RoomSchema from '../models/Room'
import AccountSchema from '../models/Account'

class DbContext {
  Rooms = mongoose.model('Room', RoomSchema);
  Account = mongoose.model('Account', AccountSchema);
}

export const dbContext = new DbContext()
