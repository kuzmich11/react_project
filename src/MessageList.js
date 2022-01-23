import React from "react";

class MessageList extends React.Component {
    constructor(props) {
        super(props)
        this.State = props;
    }
    render() {
        return(
            <div>
                {this.state.map((element) => (
                    <>
                        <div>{element.author}</div>
                        <div>{element.message}</div>
                    </>
                    ))
                }}
            </div>
        )
    }
}

// function MessageList(props) {
//     const message = props.messageList;
//     const listItems = message.map((obj) =>
//         <li key={obj.toString()}>
//             {obj}
//         </li>
//     );
//     return (
//         <ul>{listItems}</ul>
//     );
// }

export default MessageList