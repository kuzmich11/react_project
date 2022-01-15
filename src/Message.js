import './Message.css';

function Message(props) {
    return (
        <div className = "message">
            <h3 className = "message__title"> Hello, {props.name}! </h3>
        </div>
    )
}

export default Message;