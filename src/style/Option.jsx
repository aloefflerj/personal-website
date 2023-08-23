import { styled } from "styled-components";
import { PixelButton } from "../elements/buttons/PixelButton";

export const Option = styled(PixelButton)`
    width: 160px;
    height: 80px;
    font-family: var(--default-font);
    font-weight: bold;
    font-size: 18px;
    color: ${props => props.$category.darkerColor};
`;