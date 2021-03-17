import mongoose from 'mongoose'
import mongodb from "mongodb";
const Schema = mongoose.Schema

const Playlist = new Schema({
  roomCode: { type: String, required: true },
  name: { type: String, required: true },
  songs: { type:[Object] },
})

export default Playlist