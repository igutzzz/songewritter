import {useState, useEffect} from "react";
import ProfileItem from "./ProfileItem";
import SongItem from "./SongItem";
import { SongData } from "../models/song.interface";
import {FiPlus } from "react-icons/fi";
import api from "../services/api";

export default function Sidebar() {
    const [songs, setSongs] = useState<SongData[]>([])

    useEffect(() => {
        api.getSongs().then(res => setSongs(res))
    },[])


    return (
        <div className="border-r-2 h-screen container w-72 sticky static absolute">
            <ProfileItem />
            {/* Separator */}
            <div className="h-min w-full bg-slate-200"></div>
            <div className="flex justify-between items-center px-4 pt-4">
                <p className="text-slate-500 text-xs font-display">MY SONGS</p>
                <FiPlus color="rgb(100 116 139)"/>
            </div>
            <div>
                {songs != undefined ? songs!.map((song) => <SongItem key={song.id} title={song.title}/> ) : null}
            </div>
        </div>
    )
}