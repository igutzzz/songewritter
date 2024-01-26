import { FiMusic } from "react-icons/fi"

export default function SongItem(props: {title :string, key: number}) {
    return (
        <div className="p-2 hover:cursor-pointer hover:bg-slate-200 transition-all rounded flex justify-start gap-2 items-center m-2">
            <FiMusic />
            <p>{props.title}</p>
        </div>
    )
}