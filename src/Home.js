import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import './Home.css';

export default function Home() {
  const [username, setUsername] = useState('');

  return (
    <div className="coolGrey fullSize d-flex">
      <div className="mainBody"><Chat user={username} /></div>
      <div className="sideBar"><Sidebar setUsername={setUsername} /></div>
    </div>
  )
}