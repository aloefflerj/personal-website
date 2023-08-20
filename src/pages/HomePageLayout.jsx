import { styled } from "styled-components";
import { useCategoryContext } from "../hooks/useCategoryContext";

export function HomePageLayout({ children }) {
    const { category } = useCategoryContext();

    const Page = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100vw;
      height: 100vh;
      background-color: ${category.bgColor};
    `;

    return (
        <Page>
            {children}
        </Page>
    );
}