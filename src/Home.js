import { Container } from "react-bootstrap";
import Sidebar from "./components/Sidebar";
import './Home.css'

export default function Home() {
  return (
    <div className="coolGrey fullSize d-flex">
      <div className="mainBody">Hello World</div>
      <div className="sideBar"><Sidebar /></div>
    </div>
  )
}