import { styled } from 'styled-components';
import { useCategoryContext } from '../../hooks/useCategoryContext';
import PropTypes from 'prop-types';
import { BackgroundSwiper } from '../swiper/BackgroundSwiper';
import { EnvironmentScene } from './EnvironmentScene';

const phoneImgFolderPath = '/assets/img/environments/phone';

const PixelArtMain = styled.main`
    position: relative;
    width: 100vw;
    height: var(--app-height, 100vh);
    overflow: hidden;

    @media screen and (max-width: 640px) {
        display: none;
    }
`;

const PixelArtPhone = styled.main`
    image-rendering: pixelated;
    position: relative;
    display: none;

    @media screen and (max-width: 640px) {
        display: block;
        width: 100%;
        height: auto;
    }
`;

export function PixelArtContent({ children }) {
    const { category } = useCategoryContext();

    return (
        <>
            <PixelArtMain>
                <EnvironmentScene category={category} />
                {children}
            </PixelArtMain>
            <PixelArtPhone>
                <BackgroundSwiper imageFolderPath={phoneImgFolderPath} />
            </PixelArtPhone>
        </>
    );
}

PixelArtContent.propTypes = {
    children: PropTypes.element,
};
