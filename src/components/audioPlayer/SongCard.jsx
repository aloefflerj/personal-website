import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Blank } from '../../categories/Categories';
import { MusicIcon } from '../../icons/MusicIcon';
import { Track } from '../../model/Track';
import { If } from '../If';
import { TrackPlayButton } from './TrackPlayButton';

const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
    padding: 32px;
    margin: 0 auto;
    max-width: 100%;
    box-sizing: border-box;
    text-align: center;
    background-color: ${(props) =>
        props.$category.darkColor ?? Blank.darkColor};

    p {
        margin: 0;
    }

    @media screen and (max-width: 640px) {
        padding: 24px 16px;
    }
`;

const Cover = styled.img`
    image-rendering: pixelated;
    width: 192px;
    height: 192px;

    @media screen and (max-width: 640px) {
        width: 224px;
        height: 224px;
    }
`;

const CardTitle = styled.p`
    color: ${(props) => props.$category.lightColor ?? Blank.lightColor};
`;

const CardSubtitle = styled.p`
    color: ${(props) => props.$category.mediumColor ?? Blank.mediumColor};
    font-size: 18px;
`;

export function SongCard({ track, queue, index, category }) {
    return (
        <Card $category={category}>
            <If is={track.image !== null}>
                <Cover src={track.image} alt={track.title} />
            </If>
            <If is={track.image === null}>
                <MusicIcon fill={category.lightColor} />
            </If>
            <CardTitle $category={category}>{track.title}</CardTitle>
            <If is={Boolean(track.author)}>
                <CardSubtitle $category={category}>{track.author}</CardSubtitle>
            </If>
            <If is={Boolean(track.album)}>
                <CardSubtitle $category={category}>{track.album}</CardSubtitle>
            </If>
            <TrackPlayButton track={track} queue={queue} index={index} large />
        </Card>
    );
}

SongCard.propTypes = {
    track: PropTypes.instanceOf(Track).isRequired,
    queue: PropTypes.arrayOf(PropTypes.instanceOf(Track)).isRequired,
    index: PropTypes.number.isRequired,
    category: PropTypes.object,
};
