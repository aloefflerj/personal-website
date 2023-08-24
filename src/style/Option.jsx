import { styled } from "styled-components";
import { PixelButton } from "../elements/buttons/PixelButton";

export const Option = styled(PixelButton)`
    padding: 18px 6px;
    width: 100%;
    font-family: var(--default-font);
    font-weight: bold;
    font-size: 18px;
    color: ${props => props.$category.darkerColor};
`;