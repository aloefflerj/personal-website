import { styled } from 'styled-components';
import { useSidebarContext } from '../hooks/useSidebarContext';
import { useCategoryContext } from '../hooks/useCategoryContext';
import PropTypes from 'prop-types';
import { If } from '../components/If';
import {
    PLAYER_BAR_HEIGHT,
    MOBILE_PLAYER_BAR_HEIGHT,
} from '../components/audioPlayer/GlobalPlayerBar';

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
    min-height: var(--app-height, 100dvh);
    box-sizing: border-box;
    padding-bottom: ${PLAYER_BAR_HEIGHT};
    background-color: ${(props) => props.$bgColor};

    @media screen and (max-width: 640px) {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        grid-template-areas: 'sidebar';
        padding-bottom: ${MOBILE_PLAYER_BAR_HEIGHT};
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
    min-height: var(--app-height, 100dvh);
    box-sizing: border-box;
    padding-bottom: ${PLAYER_BAR_HEIGHT};
    background-color: ${(props) => props.$bgColor};

    @media screen and (max-width: 640px) {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        grid-template-areas: 'main';
        padding-bottom: ${MOBILE_PLAYER_BAR_HEIGHT};
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
