import { styled } from "styled-components";

const Page = styled.div`
  display: grid;
  grid-template-columns: 240px 1fr;
  grid-template-rows: 64px 1fr;
  grid-template-areas:
      'sidebar main'
      'sidebar main';
  width: 100%;
  height: 100%;
`;

export function CategoryPageLayout({ children }) {
    return (
        <Page>
            {children}
        </Page>
    );
}