import mongoose from 'mongoose'
import mongodb from "mongodb";

const Schema = mongoose.Schema

const Room = new Schema(
  {
    code : { type: String, required: true },
    playlistId: { type: String, required: true },
    players: { type: [String] },
    pauseLength: { type: Number, required: true },
    playlist: { type: mongodb.ObjectId, ref: 'Playlist' },
  }
)


export default Room
