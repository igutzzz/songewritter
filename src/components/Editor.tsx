export default function SongEditor() {
    return (
        <div className="border-2 border-red-600 min-h-screen w-screen">
           <div className="p-16 h-screen">
                <input type="text" className="w-full text-4xl font-bold font0-display" />
                <textarea name="lyrics" id="lyrics" className="border-2 border-red-600 w-full mt-6 font-display min-h-full resize-none"></textarea>
           </div>
        </div>
    )
}