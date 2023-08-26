import { useEffect, useState } from 'react';
import { Background } from '../style/Background';
import PropTypes from 'prop-types';

export function BackgroundLazyLoad({ src, loadingComponent, border }) {
    const [image, setImage] = useState();

    useEffect(() => {
        setImage(src);
    }, [src]);

    return image ? (
        <Background src={image} $border={border} />
    ) : (
        loadingComponent
    );
}

BackgroundLazyLoad.propTypes = {
    src: PropTypes.string,
    loadingComponent: PropTypes.element,
    border: PropTypes.string,
};
