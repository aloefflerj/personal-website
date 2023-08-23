import { styled } from "styled-components";

const Content = styled.main`
    grid-area: main;
    width: 100%;
    height: auto;
    background-color: lightcoral;
`;

export function CategoryContent({ title }) {
    return (
        <Content>
            <h1>{title}</h1>
        </Content>
    );
}