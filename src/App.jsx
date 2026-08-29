import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import {
    GlobalPlayerBar,
    PLAYER_BAR_HEIGHT,
} from './components/audioPlayer/GlobalPlayerBar';
import { Router } from './routes/Router';

const Content = styled.div`
    padding-bottom: ${(props) => (props.$isHome ? '0' : PLAYER_BAR_HEIGHT)};
`;

function App() {
    const location = useLocation();
    const isHome = location.pathname === '/';

    return (
        <>
            <GlobalPlayerBar />
            <Content $isHome={isHome}>
                <Router />
            </Content>
        </>
    );
}

export default App;
