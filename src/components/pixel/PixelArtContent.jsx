import { styled } from 'styled-components';
import { useCategoryContext } from '../../hooks/useCategoryContext';
import { BackgroundLazyLoad } from '../BackgroundLazyLoad';
import { Spinner } from '../Spinner';
import PropTypes from 'prop-types';
import { BackgroundSwiper } from '../swiper/BackgroundSwiper';

const imgFolderPath = '/assets/img/environments';
const phoneImgFolderPath = '/assets/img/environments/phone';

const PixelArtMain = styled.main`
    image-rendering: pixelated;
    position: relative;

    @media screen and (max-width: 640px) {
        display: none;
    }

    aspect-ratio: 16 / 9;
    width: min(100vw, calc(100vh * 16 / 9));
    height: min(100vh, calc(100vw * 9 / 16));
    display: flex;
    justify-content: center;
    align-items: center;
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
                <BackgroundLazyLoad
                    src={`${imgFolderPath}/${category.img}`}
                    border={category.darkerColor}
                    loadingComponent={<Spinner color={category.darkerColor} />}
                />
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
