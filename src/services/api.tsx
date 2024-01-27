import axios from "axios";
import { SongData } from "../models/song.interface";

const api = {
  url: import.meta.env.VITE_BASE_URL,
  getSongs: async (): Promise<SongData[]> => {
    const {data} = (await axios.get<SongData[]>(api.url));
    return data;
  },

  getSong: async(id: number): Promise<SongData> => {
    const {data} = (await axios.get<SongData>(api.url+"song/"+id));
    console.log(data)
    return data;
  }
};

export default api;
