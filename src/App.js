import './App.css';
import React from 'react';
import './Message.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.messageList = [];
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        this.messageList.push({author: 'me', message: this.state.value});
        this.setState({value: ''});
        event.preventDefault();
        console.log(this.messageList);
        this.messageList.push({author: 'bot', message: 'Автоматическое сообщение'})
    }

    render() {
        return (
            <>
                <form className="message__form" onSubmit={this.handleSubmit}>
                    <label>
                        <input className="message__input" type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input className="message__button" type="submit" value="Отправить" />
                </form>
                <div>
                    {this.messageList.reverse().map((obj) => {
                        if (obj.author === "bot"){
                            return (
                                <div className="message__containerBot">
                                    <div>{obj.author + ":"}</div>
                                    <div className="message__bot">{obj.message}</div>
                                </div>)
                        } else {
                            return (
                                <div className="message__containerAuthor">
                                    <div>{obj.author + ":"}</div>
                                    <div className="message__author">{obj.message}</div>
                                </div>)
                        }
                    })
                    }
                </div>
            </>
        );
    }
}

export default App;