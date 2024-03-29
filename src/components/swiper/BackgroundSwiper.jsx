import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import PropTypes from 'prop-types';
import { CategoriesKeys } from '../../categories/CategoriesKeys';
import styled from 'styled-components';
import { useCategory } from '../../hooks/useCategory';
import { useCategoryContext } from '../../hooks/useCategoryContext';
import { PixelButton } from '../../elements/buttons/PixelButton';
import { If } from '../If';
import { useStringHelper } from '../../hooks/useStringHelper';
import { SwipeIcon } from '../../icons/SwipeIcon';
import { CategoryNavLinkItem } from '../categories/CategoryNavLinkItem';

const SlideTip = styled.span`
    position: absolute;
    padding: 8px 0;
    top: 40px;
    left: calc(50% - 64px);
    width: 128px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${(props) => props.$category.lightColor}80;

    p {
        margin: 0;
        padding: 0;
        color: ${(props) => props.$category.darkerColor};
    }
`;

const SlideImage = styled.img`
    width: 100%;
`;

const SlideButton = styled(PixelButton)`
    position: absolute;
    bottom: 120px;
    left: calc(50% - 64px);
    width: 128px;
    height: 64px;
    z-index: 10000;
    font-family: var(--default-font);
    font-size: 24px;
    color: ${(props) => props.$category.darkerColor};
`;

export function BackgroundSwiper({ imageFolderPath }) {
    const reindexedCategoriesKeys = Object.keys(CategoriesKeys);
    const { getByKey } = useCategory();
    const { category, setCategory } = useCategoryContext();
    const { capitalizeFirstLetter } = useStringHelper();

    const updateCategoryContext = (key) => {
        const fetchedCategory = getByKey(key);
        setCategory(fetchedCategory);
    };

    const listCategoriesImages = reindexedCategoriesKeys.map((key, index) => (
        <SwiperSlide key={index}>
            <SlideTip $category={category}>
                <p>Swipe</p>
                <SwipeIcon fillColor={category.darkerColor} />
            </SlideTip>
            <SlideImage
                src={`${imageFolderPath}/${key}-environment.png`}
                alt={`vertical-${key}-environment`}
            />
            <If is={category.categoryKey !== CategoriesKeys.blank}>
                <CategoryNavLinkItem
                    category={category}
                    button={
                        <SlideButton $category={category}>
                            {capitalizeFirstLetter(category.categoryKey)}
                        </SlideButton>
                    }
                />
            </If>
        </SwiperSlide>
    ));

    return (
        <Swiper
            loop
            onRealIndexChange={({ realIndex }) =>
                updateCategoryContext(reindexedCategoriesKeys[realIndex])
            }
            spaceBetween={0}
            slidesPerView={1}
            initialSlide={reindexedCategoriesKeys.indexOf(category.categoryKey)}
        >
            {listCategoriesImages}
        </Swiper>
    );
}

BackgroundSwiper.propTypes = {
    imageFolderPath: PropTypes.string,
};
