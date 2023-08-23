import { styled } from "styled-components";

const Bar = styled.aside`
    grid-area: sidebar;
    width: 100%;
    height: 100vh;
    background-color: #aaa;
`;

export function Sidebar({ children }) {
    return (
        <Bar>
            {children}
        </Bar>
    );
}