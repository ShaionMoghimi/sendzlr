import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import './Sidebar.css';

export default function Sidebar() {
  const [username, setUsername] = useState('');
  const [pw, setPw] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, pw);
  }

  return (
    <Form onSubmit={(e) => handleSubmit(e)}>
      <Form.Group>
        <Form.Label>Username</Form.Label>
        <Form.Control type="input" placeholder="Username" className="mb-3" onChange={(e) => setUsername(e.target.value)}/>
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" className="mb-3" onChange={(e) => setPw(e.target.value)}/>
        <Button type="submit" className="button">Login</Button>
      </Form.Group>
    </Form>
  )
}