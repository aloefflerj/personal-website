import { styled } from 'styled-components';
import { useSidebarContext } from '../../hooks/useSidebarContext';

const Button = styled.button`
    display: block;
`;

const HiddenButton = styled.button`
    display: none;
`;

export function RetractButton() {
    const { retracted, setRetracted } = useSidebarContext();

    const retractSidebar = () => setRetracted(!retracted);

    const displayRetractButton = () =>
        retracted ? (
            <Button onClick={() => retractSidebar()}>...</Button>
        ) : (
            <HiddenButton onClick={() => retractSidebar()}>...</HiddenButton>
        );

    return displayRetractButton();
}
