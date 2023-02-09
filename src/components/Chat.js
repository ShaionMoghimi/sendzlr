import { Form } from "react-bootstrap";
import { useState } from "react";
import './Chat.css';

export default function Chat() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const messageSend = (e) => {
    e.preventDefault();
    let tmp = [...messages];
    tmp.push(message);
    setMessages(tmp);
    setMessage('');
  }
  return (
    <div className="tall">
      <div className="messages mb-2">
        {messages.map((m) => <div>{m}</div>)}
      </div>
      <div className="mt-2 mb-2">
        <Form onSubmit={(e) => messageSend(e)}>
          <Form.Control type="text" placeholder="Send a message" onChange={(e) => setMessage(e.target.value)} value={message} />
        </Form>
      </div>
    </div>
  )
}