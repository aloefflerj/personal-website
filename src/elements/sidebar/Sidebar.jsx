import { styled } from 'styled-components';

const Bar = styled.aside`
    grid-area: sidebar;
    padding: 0 12px;
    display: flex;
    flex-direction: column;
    margin: 3px 0 3px 3px;
    /* width: 100%; */
    height: calc(100vh - 6px);
    background-color: ${(props) => props.$category.darkColor};
    box-shadow:
        inset 3px -3px ${(props) => props.$category.mediumColor ?? Blank.mediumColor},
        inset -3px 3px ${(props) => props.$category.mediumColor ?? Blank.mediumColor},
        0px -6px 0px 0px ${(props) => props.$category.darkerColor ?? Blank.darkerColor},
        6px 0px 0px 0px
            ${(props) => props.$category.darkerColor ?? Blank.darkerColor},
        0px 6px 0px 0px
            ${(props) => props.$category.darkerColor ?? Blank.darkerColor},
        -6px 0px 0px 0px ${(props) => props.$category.darkerColor ?? Blank.darkerColor},
        0px -6px 0px 0px ${(props) => props.$category.darkerColor ?? Blank.darkerColor};
    border-right: 3px solid ${(props) => props.$category.darkerColor};
`;

export function Sidebar({ children, category }) {
    return <Bar $category={category}>{children}</Bar>;
}
