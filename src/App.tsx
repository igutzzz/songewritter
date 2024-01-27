import Sidebar from "./components/Sidebar"
import SongEditor  from "./components/Editor"
function App() {

  return (
    <>
      <div className='container h-screen flex justify-start'>
        <Sidebar />
        <SongEditor />
      </div>
    </>
  )
}

export default App
