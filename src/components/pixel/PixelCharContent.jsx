import { styled } from 'styled-components';
import { useCategoryContext } from '../../hooks/useCategoryContext';
import PropTypes from 'prop-types';

const Content = styled.div`
    background-color: ${(props) => props.$category.bgColor};
    display: flex;
    align-items: baseline;
    justify-content: center;
    padding: 6px;
    margin: 12px 0;

    box-shadow:
        inset 3px -3px ${(props) => props.$category.lightColor},
        inset -3px 3px ${(props) => props.$category.lightColor},
        3px 0px 0px 0px ${(props) => props.$category.darkerColor},
        0px 3px 0px 0px ${(props) => props.$category.darkerColor},
        -3px 0px 0px 0px ${(props) => props.$category.darkerColor},
        0px -3px 0px 0px ${(props) => props.$category.darkerColor};
`;

export function PixelCharContent({ children }) {
    const { category } = useCategoryContext();

    return (
        <Content
            $category={category}
        >
            {children}
        </Content>
    );
}

PixelCharContent.propTypes = {
    children: PropTypes.element,
};
