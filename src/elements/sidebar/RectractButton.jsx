import { styled } from 'styled-components';
import { useSidebarContext } from '../../hooks/useSidebarContext';
import { useCategoryContext } from '../../hooks/useCategoryContext';
import { HamburgerIcon } from '../../icons/HamburgerIcon';
import { Option } from '../../style/Option';

const Button = styled(Option)`
    display: block;
    max-width: 40px;
    max-height: 40px;
    font-size: 0px;
    padding: 2px;
`;

const HiddenButton = styled(Option)`
    display: none;
`;

export function RetractButton() {
    const { retracted, setRetracted } = useSidebarContext();
    const { category } = useCategoryContext();

    const retractSidebar = () => setRetracted(!retracted);

    const displayRetractButton = () =>
        retracted ? (
            <Button onClick={() => retractSidebar()} $category={category}>
                <HamburgerIcon fillColor={category.lightColor} />
            </Button>
        ) : (
            <HiddenButton onClick={() => retractSidebar()} $category={category}>
                <HamburgerIcon fillColor={category.lightColor} />
            </HiddenButton>
        );

    return displayRetractButton();
}
