import { styled } from "styled-components";

const CategroyPage = styled.div`
  display: grid;
  grid-template-columns: 240px 1fr;
  grid-template-rows: 64px 1fr;
  grid-template-areas:
      'main sidebar'
      'main sidebar';
  width: 100%;
  height: 100%;
`;

export function CategoryPageLayout({ children }) {
    return (
        <CategroyPage>
            {children}
        </CategroyPage>
    );
}