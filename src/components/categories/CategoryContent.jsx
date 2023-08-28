import { styled } from 'styled-components';
import PropTypes from 'prop-types';
import { Breadcrumbs } from '../Breadcrumbs';

const Content = styled.main`
    grid-area: main;
    width: 100%;
    height: auto;
    background-color: ${(props) => props.$bgColor};
`;

// const TitleWrapper = styled.div`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     background-color: ${(props) => props.$category.mediumColor};
//     border: 3px solid ${(props) => props.$category.lightColor};
//     filter: brightness(200%);
// `;

// const Title = styled.h1`
//     color: ${(props) => props.$fontColor};
//     margin: 0;
//     padding: 16px 32px;
// `;

export function CategoryContent({ category, children }) {
    return (
        <Content $bgColor={category.bgColor}>
            {/* <TitleWrapper $category={category}>
                <Title $fontColor={category.lightColor}>{category.title}</Title>
            </TitleWrapper> */}
            <Breadcrumbs category={category} />
            {children}
        </Content>
    );
}

CategoryContent.propTypes = {
    category: PropTypes.object,
    children: PropTypes.element,
};
