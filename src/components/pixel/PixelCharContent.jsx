import { styled } from 'styled-components';
import { useCategoryContext } from '../../hooks/useCategoryContext';
import PropTypes from 'prop-types';

const Content = styled.div`
    background-color: ${(props) => props.$category.bgColor};
    display: flex;
    align-items: baseline;
    justify-content: center;
    padding: 12px;
    margin: 12px 0;

    /* border: 3px solid ${(props) => props.$category.borderColor}; */
    box-shadow:
        inset 3px -3px ${(props) => props.$category.lightColor},
        inset -3px 3px ${(props) => props.$category.lightColor},
        3px 0px 0px 0px ${(props) => props.$category.darkerColor},
        0px 3px 0px 0px ${(props) => props.$category.darkerColor},
        -3px 0px 0px 0px ${(props) => props.$category.darkerColor},
        0px -3px 0px 0px ${(props) => props.$category.darkerColor};
    /* inset 3px -3px ${(props) => props.$category.darkColor},
            inset -3px 3px ${(props) => props.$category.darkColor},
            inset -6px 6px ${(props) => props.$category.lightColor},
            inset 6px -6px ${(props) => props.$category.lightColor},
            3px 0px 0px 0px ${(props) => props.$category.darkerColor},
            0px 3px 0px 0px ${(props) => props.$category.darkerColor},
            -3px 0px 0px 0px ${(props) => props.$category.darkerColor},
            0px -3px 0px 0px ${(props) => props.$category.darkerColor}; */
    filter: brightness(${(props) => props.$brightnessPercentage}%);
`;

export function PixelCharContent({ children, brightnessPercentage }) {
    const { category } = useCategoryContext();

    return (
        <Content
            $category={category}
            $brightnessPercentage={brightnessPercentage}
        >
            {children}
        </Content>
    );
}

PixelCharContent.propTypes = {
    children: PropTypes.element,
    brightnessPercentage: PropTypes.string,
};
