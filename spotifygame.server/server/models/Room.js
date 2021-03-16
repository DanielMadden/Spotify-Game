import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Room = new Schema(
  {
    code : { type: String, required: true },
    playlist: { type: String, required: true },
    players: { type: [String] },
    pauseLength: { type: Number, required: true },
  }
)


export default Room
