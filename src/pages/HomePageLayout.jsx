import { styled } from 'styled-components';
import { useCategoryContext } from '../hooks/useCategoryContext';
import PropTypes from 'prop-types';

const Page = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: ${(props) => props.$bgColor};
`;

export function HomePageLayout({ children }) {
    const { category } = useCategoryContext();

    return <Page $bgColor={category.bgColor}>{children}</Page>;
}

HomePageLayout.propTypes = {
    children: PropTypes.element,
};
