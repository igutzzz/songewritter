import {useState, useEffect} from "react";
import ProfileItem from "./ProfileItem";
import SongItem from "./SongItem";
import { SongData } from "../models/song.interface";
import {FiPlus } from "react-icons/fi";
import api from "../services/api";
import { useStore } from "../controllers/SongController";

export default function Sidebar() {
    const [songs, setSongs] = useState<SongData[]>([])
    
    const {id, setId} = useStore()

    useEffect(() => {
        api.getSongs()
        .then(res => setSongs(res))
        .then(_res => setId(songs[0].id))
        .then(res => api.getSong(id))
    },[])


    return (
        <div className="border-r-2 h-screen container w-72 sticky">
            <ProfileItem />
            {/* Separator */}
            <div className="h-min w-full bg-slate-200"></div>
            <div className="flex justify-between items-center px-4 pt-4">
                <p className="text-slate-500 text-xs font-display">MY SONGS</p>
                <FiPlus color="rgb(100 116 139)"/>
            </div>
            <div>
                {songs != undefined ? songs!.map((song) => <SongItem key={song.id} title={song.title} id={song.id}/> ) : null}
            </div>
        </div>
    )
}