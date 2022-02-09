import {Routes, Route, Link} from "react-router-dom";
import "../App.scss";
import Home from './Home';
import Profile from './Profile';
import ChatId from "./ChatId";
import {Button, ButtonGroup} from '@mui/material';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import Chats from "./Chats";
import NoChat from "./NoChat";
import {Provider} from "react-redux";
import {store} from "../store";
import Gists from "./Gists";

const theme = createTheme({
    palette: {
        primary: {
            main: "#1976d2",
        },
        secondary: {
            main: "#0098FF",
        },
    },
});

function Routers() {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <ButtonGroup sx={{
                    p: 1,
                    m: 2,
                    backgroundColor: 'background.default',
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr 1fr 1fr',
                    justifyItems: 'center',
                }}
                             size="large" variant="contained" aria-label="large button group">
                    <Link to='/'>
                        <Button>Home</Button>
                    </Link>
                    <Link to='chats'>
                        <Button>Chats</Button>
                    </Link>
                    <Link to='profile'>
                        <Button>Profile</Button>
                    </Link>
                    <Link to='gists'>
                        <Button>Gists</Button>
                    </Link>
                </ButtonGroup>
                <div>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/profile" element={<Profile/>}/>
                        <Route path="/chats" element={<Chats />}/>
                        <Route path="/chats/:chatId" element={<ChatId />}/>
                        <Route path="/gists" element = {<Gists/>} />
                        <Route path="*" element={<NoChat/>}/>
                    </Routes>
                </div>
            </ThemeProvider>
        </Provider>
    );
}

export default Routers

