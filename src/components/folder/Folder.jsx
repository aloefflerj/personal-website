import styled from 'styled-components';
import { FolderIcon } from '../../icons/FolderIcon';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const FolderWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 120px;
    text-align: center;
`;

const FolderLink = styled(NavLink)`
    &:hover {
        filter: brightness(200%);
    }
`;

const Title = styled.p`
    color: ${(props) => props.$fontColor};
`;

export function Folder({ to, title, category }) {
    return (
        <FolderLink to={to}>
            <FolderWrapper>
                <FolderIcon fill={category.lightColor} />
                <Title $fontColor={category.lightColor}>{title}</Title>
            </FolderWrapper>
        </FolderLink>
    );
}

Folder.propTypes = {
    to: PropTypes.string,
    title: PropTypes.string,
    category: PropTypes.object,
};
