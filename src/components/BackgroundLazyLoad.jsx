import { useEffect, useState } from 'react';
import { Background } from '../style/Background';

export function BackgroundLazyLoad({ src, loadingComponent, border }) {
    const [image, setImage] = useState();

    useEffect(() => {
        setImage(src);
    });

    return image ? (
        <Background src={image} $border={border} />
    ) : (
        loadingComponent
    );
}
