import styled from 'styled-components';
import { FolderIcon } from '../../icons/FolderIcon';
import { MusicIcon } from '../../icons/MusicIcon';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { SubcategoryContentType } from '../../common/SubcategoryContentType';
import { If } from '../If';
import { SingleTrackPlayer } from '../audioPlayer/SingleTrackPlayer';
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
    songPath = null 
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
                <MusicIcon fill={category.lightColor} />
                <Title $fontColor={category.lightColor}>{title}</Title>
                <If is={subtitle !== null || subtitle !== undefined}>
                    <Subtitle $fontColor={category.mediumColor}>{subtitle?.artist}</Subtitle>
                    <Subtitle $fontColor={category.mediumColor}>{subtitle?.album}</Subtitle>
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

    console.log(contentType);

    return <SubcategoriesItemWrapper id={id}>
        {item}
        <If is={songPath !== null && songPath !== undefined}>
            <SingleTrackPlayer
                track={
                    new Track(
                        id,
                        `/assets/audio/${songPath}`,
                        title,
                        subtitle?.artist,
                        subtitle?.album
                    )
                }
            />
        </If>
    </SubcategoriesItemWrapper>
}

SubcategoryItem.propTypes = {
    id: PropTypes.number,
    to: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.object,
    category: PropTypes.object,
    contentType: PropTypes.string,
};
