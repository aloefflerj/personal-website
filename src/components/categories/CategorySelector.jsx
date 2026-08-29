import { styled } from 'styled-components';
import { CategoryNavLinks } from './CategoryNavLinks';

const Selector = styled.aside`
    position: absolute;
    top: 6px;
    right: 6px;

    @media screen and (max-width: 640px) {
        display: none;
    }
`;

export function CategorySelector() {
    return (
        <Selector>
            <CategoryNavLinks />
        </Selector>
    );
}
