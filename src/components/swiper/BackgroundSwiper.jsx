import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import PropTypes from 'prop-types';
import { CategoriesKeys } from '../../categories/CategoriesKeys';
import styled from 'styled-components';
import { useCategory } from '../../hooks/useCategory';
import { useCategoryContext } from '../../hooks/useCategoryContext';

const SlideImage = styled.img`
    width: 100%;
`;

export function BackgroundSwiper({ imageFolderPath }) {
    const reindexedCategoriesKeys = Object.keys(CategoriesKeys);
    const { getByKey } = useCategory();
    const { setCategory } = useCategoryContext();

    const updateCategoryContext = (key) => {
        const category = getByKey(key);
        setCategory(category);
    };

    const listCategoriesImages = reindexedCategoriesKeys.map((key, index) => (
        <SwiperSlide key={index}>
            <SlideImage
                src={`${imageFolderPath}/${key}-environment.png`}
                alt={`vertical-${key}-environment`}
            />
        </SwiperSlide>
    ));

    return (
        <Swiper
            spaceBetween={0}
            slidesPerView={1}
            onSlideChange={({ activeIndex }) =>
                updateCategoryContext(reindexedCategoriesKeys[activeIndex])
            }
        >
            {listCategoriesImages}
        </Swiper>
    );
}

BackgroundSwiper.propTypes = {
    imageFolderPath: PropTypes.string,
};
