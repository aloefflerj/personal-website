import styled from 'styled-components';
import { FolderIcon } from '../../icons/FolderIcon';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const FolderWrapper = styled.div`
    display: flex;
    flex-direction: column;
    aling-items: center;
    justify-content: center;
`;

export function Folder({ to, title }) {
    return (
        <NavLink to={to}>
            <FolderWrapper>
                <FolderIcon />
                <p>{title}</p>
            </FolderWrapper>
        </NavLink>
    );
}

Folder.propTypes = {
    to: PropTypes.string,
    title: PropTypes.string,
};
