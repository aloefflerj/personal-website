import { styled } from 'styled-components';
import { useSidebarContext } from '../hooks/useSidebarContext';
import { useCategoryContext } from '../hooks/useCategoryContext';
import PropTypes from 'prop-types';
import { If } from '../components/If';

const Page = styled.div`
    display: grid;
    grid-template-columns: 240px 1fr;
    grid-template-rows: 64px 1fr;
    grid-template-areas:
        'sidebar main'
        'sidebar main';
    width: 100%;
    height: 100%;
    min-height: 100vh;
    background-color: ${(props) => props.$bgColor};

    @media screen and (max-width: 640px) {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        grid-template-areas: 'sidebar';
    }
`;

const RetractedSidebarPage = styled.div`
    display: grid;
    grid-template-columns: 8px 1fr;
    grid-template-rows: 64px 1fr;
    grid-template-areas:
        'sidebar main'
        'sidebar main';
    width: 100%;
    height: 100%;
    min-height: 100vh;
    background-color: ${(props) => props.$bgColor};

    @media screen and (max-width: 640px) {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        grid-template-areas: 'main';
    }
`;

export function CategoryPageLayout({ children }) {
    const { category } = useCategoryContext();
    const { retracted } = useSidebarContext();

    return (
        <>
            <If is={!retracted}>
                <Page $bgColor={category.bgColor}>{children}</Page>
            </If>
            <If is={retracted}>
                <RetractedSidebarPage $bgColor={category.bgColor}>
                    {children}
                </RetractedSidebarPage>
            </If>
        </>
    );
}

CategoryPageLayout.propTypes = {
    children: PropTypes.array,
};
