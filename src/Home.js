import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat"
import './Home.css'

export default function Home() {
  return (
    <div className="coolGrey fullSize d-flex">
      <div className="mainBody"><Chat /></div>
      <div className="sideBar"><Sidebar /></div>
    </div>
  )
}