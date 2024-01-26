import axios from "axios";
import { SongData } from "../models/song.interface";

const api = {
  getSongs: async (): Promise<SongData[]> => {
    const url = import.meta.env.VITE_BASE_URL;
    const {data} = (await axios.get<SongData[]>(url));
    return data;
  },
};

export default api;
