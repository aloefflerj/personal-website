import { styled } from 'styled-components';
import PropTypes from 'prop-types';
import { Breadcrumbs } from '../Breadcrumbs';

const Content = styled.main`
    grid-area: main;
    width: 100%;
    height: auto;
    background-color: ${(props) => props.$bgColor};
`;

export function CategoryContent({ category, children }) {
    return (
        <Content $bgColor={category.bgColor}>
            <Breadcrumbs category={category} />
            {children}
        </Content>
    );
}

CategoryContent.propTypes = {
    category: PropTypes.object,
    children: PropTypes.element,
};
