import { styled } from 'styled-components';
import { useCategoryContext } from '../../hooks/useCategoryContext';
import { BackgroundLazyLoad } from '../BackgroundLazyLoad';
import { Spinner } from '../Spinner';
import PropTypes from 'prop-types';

const imgFolderPath = '/assets/img/environments';

const PixelArtMain = styled.main`
    image-rendering: pixelated;
    position: relative;

    @media only screen and (min-height: 360px) and (min-width: 640px) {
        width: 640px;
        height: 360px;
    }

    @media only screen and (min-height: 540px) and (min-width: 960px) {
        width: 960px;
        height: 540px;
    }

    @media only screen and (min-height: 810px) and (min-width: 1440px) {
        width: 1440px;
        height: 810px;
    }

    @media only screen and (min-height: 1080px) and (min-width: 1920px) {
        width: 1920px;
        height: 1080px;
    }
`;

export function PixelArtContent({ children }) {
    const { category } = useCategoryContext();

    return (
        <PixelArtMain>
            <BackgroundLazyLoad
                src={`${imgFolderPath}/${category.img}`}
                border={category.darkerColor}
                loadingComponent={<Spinner color={category.darkerColor} />}
            />
            {children}
        </PixelArtMain>
    );
}

PixelArtContent.propTypes = {
    children: PropTypes.element,
};
