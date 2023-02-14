import './Message.css';

export default function Message(props) {
  return (
    <div className={props.user ? 'meWrap' : ''}>
      <div className={props.user ? 'me' : 'other'}>
        {props.data}
      </div>
    </div>
  )
}