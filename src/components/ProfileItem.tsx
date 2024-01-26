export default function ProfileItem() {
    return(
        <div className="p-4 flex gap-2 items-center">
            <img src="https://i.pravatar.cc/300" alt="Avatar image"  className="w-12 object-cover rounded-lg"/>
            <div>
                <h1 className="font-display font-semibold text-xl">John Doe</h1>
                <p className="font-display font-reg text-min">MY PROFILE</p>
            </div>
        </div>
    )
}