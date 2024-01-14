import styled from 'styled-components';
import { FolderIcon } from '../../icons/FolderIcon';
import { MusicIcon } from '../../icons/MusicIcon';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { SubcategoryContentType } from '../../common/SubcategoryContentType';
import { If } from '../If';

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


export function SubcategoryItem({ to, title, subtitle, category, contentType }) {
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

    switch (contentType) {
        case SubcategoryContentType.folder:
            return FolderItem;
        case SubcategoryContentType.song:
            return SongItem;
        default: return FolderItem;
    }
}

SubcategoryItem.propTypes = {
    to: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.object,
    category: PropTypes.object,
    contentType: PropTypes.string,
};
