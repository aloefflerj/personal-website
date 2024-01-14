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
import { CategoryNavLinkItem } from '../categories/CategoryNavlinkItem';

const Slide = styled(SwiperSlide)`
    position: relative;
`;

const SlideTip = styled.span`
    position: absolute;
    top: 40px;
    left: calc(50% - 64px);
    width: 128px;
    display: flex;
    flex-direction: column;
    align-items: center;

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
    bottom: 40px;
    left: calc(50% - 64px);
    width: 128px;
    height: 64px;
    z-index: 10000;
    font-family: var(--default-font);
    font-size: 24px;
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
        <Slide key={index}>
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
        </Slide>
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
