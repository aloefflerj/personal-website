import { styled } from 'styled-components';
import PropTypes from 'prop-types';

const Content = styled.main`
    grid-area: main;
    width: 100%;
    height: auto;
    background-color: ${(props) => props.$bgColor};
`;

export function CategoryContent({ category }) {
    return (
        <Content $bgColor={category.bgColor}>
            <h1>{category.title}</h1>
        </Content>
    );
}

CategoryContent.propTypes = {
    category: PropTypes.object,
};
