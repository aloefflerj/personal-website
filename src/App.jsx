import { useEffect } from 'react';
import { GlobalPlayerBar } from './components/audioPlayer/GlobalPlayerBar';
import { Router } from './routes/Router';

function App() {
    // Viewport units (vh/dvh) don't always match window.innerHeight - the gap
    // between the two shows as unpainted space under a fixed-positioned bar.
    // Publish the measured height so layouts can size against the real viewport.
    useEffect(() => {
        const setAppHeight = () => {
            document.documentElement.style.setProperty(
                '--app-height',
                `${window.innerHeight}px`
            );
        };

        setAppHeight();
        window.addEventListener('resize', setAppHeight);
        return () => window.removeEventListener('resize', setAppHeight);
    }, []);

    return (
        <>
            <GlobalPlayerBar />
            <Router />
        </>
    );
}

export default App;
