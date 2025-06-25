import styled from 'styled-components';
import PropTypes from 'prop-types';

const Title = styled.h2`
    background-color: ${(props) => props.$bgColor};
    margin: 0;
    padding: 4px 0 4px 32px;
    color: ${(props) => props.$fontColor};
`;

export function FoldersLayout({ category, title, children }) {
    return (
        <>
            <Title
                $bgColor={category.lightColor}
                $fontColor={category.darkerColor}
            >
                {title}
            </Title>
            {children}
        </>
    );
}

FoldersLayout.propTypes = {
    title: PropTypes.string,
    category: PropTypes.object,
    children: PropTypes.element,
};
