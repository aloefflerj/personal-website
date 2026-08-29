import styled from 'styled-components';
import { FolderIcon } from '../../icons/FolderIcon';
import { MusicIcon } from '../../icons/MusicIcon';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { SubcategoryContentType } from '../../common/SubcategoryContentType';
import { If } from '../If';
import { TrackPlayButton } from '../audioPlayer/TrackPlayButton';
import { Track } from '../../model/Track';

const SubcategoriesItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const SubcategoryFolderWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 120px;
    text-align: center;
`;

const SubcategorySongWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    p {
        margin: 4px 0 0 0;
    }
`;

const SongImage = styled.img`
    image-rendering: pixelated;
    width: 64px;
    height: 64px;
`;

const SubcategoryLink = styled(NavLink)`
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
        filter: brightness(150%);
    }
`;

const Title = styled.p`
    color: ${(props) => props.$fontColor};
`;

const Subtitle = styled.p`
    color: ${(props) => props.$fontColor};
    font-size: 18px;
`;

export function SubcategoryItem({
    id,
    to,
    title,
    subtitle,
    category,
    contentType,
    songPath = null,
    image = null,
    songQueue = [],
    songIndex = -1,
}) {
    const FolderItem = (
        <SubcategoryLink to={to}>
            <SubcategoryFolderWrapper>
                <FolderIcon fill={category.lightColor} />
                <Title $fontColor={category.lightColor}>{title}</Title>
            </SubcategoryFolderWrapper>
        </SubcategoryLink>
    );

    const SongItem = (
        <SubcategoryLink to={to}>
            <SubcategorySongWrapper>
                <If is={image !== null}>
                    <SongImage src={`/assets/img/songs/${image}`} alt={title} />
                </If>
                <If is={image === null}>
                    <MusicIcon fill={category.lightColor} />
                </If>
                <Title $fontColor={category.lightColor}>{title}</Title>
                <If is={subtitle !== null || subtitle !== undefined}>
                    <Subtitle $fontColor={category.mediumColor}>
                        {subtitle?.artist}
                    </Subtitle>
                    <Subtitle $fontColor={category.mediumColor}>
                        {subtitle?.album}
                    </Subtitle>
                </If>
            </SubcategorySongWrapper>
        </SubcategoryLink>
    );

    let item;
    switch (contentType) {
        case SubcategoryContentType.folder:
        default:
            item = FolderItem;
            break;
        case SubcategoryContentType.song:
            item = SongItem;
            break;
    }

    return (
        <SubcategoriesItemWrapper id={id}>
            {item}
            <If is={songPath !== null && songPath !== undefined}>
                <TrackPlayButton
                    track={songQueue[songIndex]}
                    queue={songQueue}
                    index={songIndex}
                />
            </If>
        </SubcategoriesItemWrapper>
    );
}

SubcategoryItem.propTypes = {
    id: PropTypes.number,
    to: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.object,
    category: PropTypes.object,
    contentType: PropTypes.string,
    songPath: PropTypes.string,
    image: PropTypes.string,
    songQueue: PropTypes.arrayOf(PropTypes.instanceOf(Track)),
    songIndex: PropTypes.number,
};
