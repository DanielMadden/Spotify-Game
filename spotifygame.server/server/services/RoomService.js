import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'
import Startup from '../Startup'
import {api} from "./AxiosService.js"

class RoomService {
  async create(room) {
    let token = Startup.GetToken();

    let res  = await api.get("playlists/" + room.playlistId, {headers:{Authorization : "Bearer " + token}});
    let filteredData = res.data.tracks.items.filter(i=> i.track.preview_url != null);
    let noPreviewSongs = res.data.tracks.items.filter(i=> i.track.preview_url == null);

    if (filteredData.length < 20)
    {
      throw new BadRequest('Not enough songs with previews in this playlist.')
    }
    

    let songs = []

    for (var i = 0, len = filteredData.length; i < len; i++) {
      let song = {
        name: filteredData[i].track.name,
        artist: filteredData[i].track.artists[0].name,
        url: filteredData[i].track.preview_url
      }
      songs.push(song);
    }

    let shuffledSongs = this.shuffleArray(songs)
    
    while (shuffledSongs.length > 20)
    {
      shuffledSongs.pop();
    }

    let playlist = {
      roomCode: room.code,
      name: res.data.name,
      songs: songs
    };

    await dbContext.Playlists.create(playlist)
    room.playlist = playlist;
    await dbContext.Rooms.create(room)
  }

  shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        }
        return array;
    }
}
export const roomService = new RoomService()