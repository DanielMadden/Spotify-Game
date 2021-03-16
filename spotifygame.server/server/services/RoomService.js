import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'
import Startup from '../Startup'
import {api} from "./AxiosService.js"
class RoomService {
  async create(room) {
    let token = Startup.GetToken();

    let res  = await api.get("playlists/" + room.playlist, {headers:{Authorization : "Bearer " + token}});
    let filteredData = res.data.tracks.items.filter(i=> i.track.preview_url != null);
    let noPreviewSongs = res.data.tracks.items.filter(i=> i.track.preview_url == null);
    // TODO: more playlist checking
  }
}
export const roomService = new RoomService()