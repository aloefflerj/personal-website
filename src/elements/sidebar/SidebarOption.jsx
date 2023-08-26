import { styled } from 'styled-components';
import { useCategoryContext } from '../../hooks/useCategoryContext';
import { Option } from '../../style/Option';

const StyledOption = styled(Option)`
    width: 100%;
`;

export function SidebarOption({ children }) {
    const { category } = useCategoryContext();

    return <StyledOption $category={category}>{children}</StyledOption>;
}
