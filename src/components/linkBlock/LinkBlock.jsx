import { Track } from '../../model/Track';
import { TrackPlayButton } from '../audioPlayer/TrackPlayButton';

export function LinkBlock(props) {
    const { href } = props;

    if (href.includes('/assets/audio')) {
        const track = new Track(0, href, href, '', '');
        return <TrackPlayButton track={track} queue={[track]} index={0} />;
    }

    if (href.includes('https://github.com/user-attachments/assets')) {
        return (
            <video controls="controls" width="800" height="600">
                <source src={href} />
            </video>
        );
    }

    if (href.includes('https://www.youtube.com/watch?v=')) {
        const match = href.match(
            /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([\w-]{11})/
        );

        const videoId = match ? match[1] : null;

        return (
            <iframe
                width="800"
                height="600"
                src={`https://www.youtube.com/embed/${videoId}`}
                title="YouTube Video"
                frameBorder="0"
                allowFullScreen
            ></iframe>
        );
    }

    return <a {...props} />;
}
