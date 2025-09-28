import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useCategoryDB } from '../../hooks/useCategoryDB';
import { useEffect, useState } from 'react';
import _ from 'lodash';
import { MarkdownDynamicContent } from '../../components/markdown/MarkdownDynamicContent';
import { SubcategoryType } from '../../common/SubcategoryType';

const DigitalPaintingContent = styled.div`
    color: ${(props) => props.$category.lightColor};
`;

export function AnimationPage({ category, markdownPathType }) {
    const { link } = useParams();
    const { fetchSubcategoryItemByLink } = useCategoryDB(category);
    const [animationJsonData, setAnimationJsonData] = useState({});

    useEffect(() => {
        fetchDigitalPainting();
    }, [link]);

    const fetchDigitalPainting = () => {
        if (link !== undefined || link !== null) {
            return fetchSubcategoryItemByLink(
                SubcategoryType.animation,
                link
            ).then((animationJsonData) =>
                setAnimationJsonData(animationJsonData)
            );
        }
    };

    return (
        <DigitalPaintingContent $category={category}>
            <MarkdownDynamicContent
                dbJsonData={animationJsonData}
                subcategory={SubcategoryType.animation}
                category={category}
                link={link}
                markdownPathType={markdownPathType}
            />
        </DigitalPaintingContent>
    );
}

AnimationPage.propTypes = {
    category: PropTypes.object,
};
