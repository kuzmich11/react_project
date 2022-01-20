import './App.css';
import Message from './Message';

function App(props) {
 return (
   <Message name={props.name}/>
 );
}

export default App;