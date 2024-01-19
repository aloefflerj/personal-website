import { styled } from 'styled-components';
import PropTypes from 'prop-types';
import { useSidebarContext } from '../../hooks/useSidebarContext';
import { If } from '../../components/If';

const Bar = styled.aside`
    grid-area: sidebar;
    padding: 0 24px;
    display: flex;
    flex-direction: column;
    margin: 3px 0 0 3px;
    position: fixed;
    height: calc(100vh - 6px);
    background-color: ${(props) => props.$category.darkColor};
    box-shadow:
        inset 3px -3px ${(props) => props.$category.mediumColor},
        inset -3px 3px ${(props) => props.$category.mediumColor},
        0px -6px 0px 0px ${(props) => props.$category.darkerColor},
        3px 0px 0px 0px ${(props) => props.$category.darkerColor},
        0px 6px 0px 0px ${(props) => props.$category.darkerColor},
        -3px 0px 0px 0px ${(props) => props.$category.darkerColor},
        0px -6px 0px 0px ${(props) => props.$category.darkerColor};

    @media screen and (max-width: 640px) {
        width: calc(100vw - 54px);
    }
`;

const RetractedBar = styled.aside`
    grid-area: sidebar;
    padding: 0 24px;
    display: flex;
    flex-direction: column;
    margin: 3px 0 0 3px;
    position: fixed;
    height: calc(100vh - 6px);
    background-color: ${(props) => props.$category.darkColor};
    box-shadow:
        inset 3px -3px ${(props) => props.$category.mediumColor},
        inset -3px 3px ${(props) => props.$category.mediumColor},
        0px -6px 0px 0px ${(props) => props.$category.darkerColor},
        3px 0px 0px 0px ${(props) => props.$category.darkerColor},
        0px 6px 0px 0px ${(props) => props.$category.darkerColor},
        -3px 0px 0px 0px ${(props) => props.$category.darkerColor},
        0px -6px 0px 0px ${(props) => props.$category.darkerColor};

    display: none;
`;

export function Sidebar({ children, category }) {
    const { retracted, setRetracted } = useSidebarContext();

    const barContent = (
        <>
            <button onClick={() => setRetracted(!retracted)}>click</button>
            {children}
        </>
    );

    return (
        <>
            <If is={!retracted}>
                <Bar $category={category}>{barContent}</Bar>
            </If>
            <If is={retracted}>
                <RetractedBar $category={category}>{barContent}</RetractedBar>
            </If>
        </>
    );
}

Sidebar.propTypes = {
    children: PropTypes.array,
    category: PropTypes.object,
};
