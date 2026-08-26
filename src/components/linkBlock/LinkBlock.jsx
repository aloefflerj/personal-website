import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Track } from '../../model/Track';
import { TrackPlayButton } from '../audioPlayer/TrackPlayButton';

export function LinkBlock(props) {
    const { href, children, title } = props;

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

    // Internal routes must not go through <a target="_blank"> — that would
    // reload the whole SPA. /assets/* is left alone: real files, not routes.
    if (href.startsWith('/') && !href.startsWith('/assets')) {
        return (
            <Link to={href} title={title}>
                {children}
            </Link>
        );
    }

    return <a {...props} />;
}

LinkBlock.propTypes = {
    href: PropTypes.string,
    children: PropTypes.node,
    title: PropTypes.string,
};
