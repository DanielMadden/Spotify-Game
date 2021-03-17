import mongoose from 'mongoose'
import RoomSchema from '../models/Room'
import PlaylistSchema from '../models/Playlist'
import AccountSchema from '../models/Account'

class DbContext {
  Rooms = mongoose.model('Room', RoomSchema);
  Playlists = mongoose.model('Playlist', PlaylistSchema);
  Account = mongoose.model('Account', AccountSchema);
}

export const dbContext = new DbContext()
