import { GlobalAudioPlayer } from './components/audioPlayer/GlobalAudioPlayer';
import { Router } from './routes/Router';

function App() {
    return (
        <>
            {/* <AudioPlayer global={true} miniplayer={false} /> */}
            <GlobalAudioPlayer />
            <Router />
        </>
    );
}

export default App;
