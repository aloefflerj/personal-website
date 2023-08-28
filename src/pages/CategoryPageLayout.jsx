import { styled } from 'styled-components';
import { useCategoryContext } from '../hooks/useCategoryContext';
import PropTypes from 'prop-types';

const Page = styled.div`
    display: grid;
    grid-template-columns: 240px 1fr;
    grid-template-rows: 64px 1fr;
    grid-template-areas:
        'sidebar main'
        'sidebar main';
    width: 100%;
    height: 100vh;
    background-color: ${(props) => props.$bgColor};
`;

export function CategoryPageLayout({ children }) {
    const { category } = useCategoryContext();

    return <Page $bgColor={category.bgColor}>{children}</Page>;
}

CategoryPageLayout.propTypes = {
    children: PropTypes.array,
};
