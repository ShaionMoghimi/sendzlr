import { Form } from "react-bootstrap";
import { useCallback, useEffect, useState } from "react";
import useWebSocket, { ReadyState } from 'react-use-websocket';
import './Chat.css';
import Message from "./Message";

export default function Chat() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [socketUrl, setSocketUrl] = useState('ws://127.0.0.1:8999');

  const { readyState, sendMessage, lastMessage } = useWebSocket(socketUrl);

  useEffect(() => {
    if (lastMessage !== null) {
      console.log(lastMessage);
      setMessages((prev) => prev.concat(lastMessage));
    }
  }, [lastMessage]);

  const connectionStatus = {
    [ReadyState.CONNECTING]: 'Connecting',
    [ReadyState.OPEN]: 'Open',
    [ReadyState.CLOSING]: 'Closing',
    [ReadyState.CLOSED]: 'Closed',
    [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
  }[readyState];

  const messageSend = (e) => {
    e.preventDefault();
    const m = { sender: 'me', data: message };
    setMessages((prev) => prev.concat(m))
    handleSendMessage(m);
    setMessage('');
  }

  const handleSendMessage = useCallback(() => sendMessage(message));

  return (
    <div className="tall">
      <div className="messages mb-2">
        {messages.map((m) => <Message user={m.sender} data={m.data} />)}
      </div>
      <Form onSubmit={(e) => messageSend(e)}>
        <Form.Control type="text" placeholder="Send a message" onChange={(e) => setMessage(e.target.value)} value={message} />
      </Form>
    </div>
  )
}