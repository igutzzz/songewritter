import { FiMusic } from "react-icons/fi"

export default function SongItem(props: {title :string, key: number}) {
    return (
        <div className="p-2 hover:cursor-pointer hover:bg-slate-100 transition-all rounded-md flex justify-between items-center m-2">
           <div className="flex justify-start items-center gap-2">
                <FiMusic />
                <p className="font-display">{props.title}</p>
           </div>
        </div>
    )
}