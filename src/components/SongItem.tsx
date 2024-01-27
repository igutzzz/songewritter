import { FiMusic } from "react-icons/fi"
import { useStore } from "../controllers/SongController"
import React from "react";

export default function SongItem(props: {title :string, id: number}) {
    const {id, setId} = useStore();
    const setNewId = (event: React.MouseEvent, newId: number) => {
       setId(newId)
    }

    return (
        <div className="p-2 hover:cursor-pointer hover:bg-slate-100 transition-all rounded-md flex justify-between items-center m-2" onClick={(event: React.MouseEvent<Element, MouseEvent>)=> setNewId(event, props.id)}>
           <div className="flex justify-start items-center gap-2">
                <FiMusic />
                <p className="font-display">{props.title}</p>
           </div>
        </div>
    )
}