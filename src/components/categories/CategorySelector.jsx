import { styled } from 'styled-components';
import { CategoryNavLinks } from './CategoryNavLinks';

const Selector = styled.aside`
    position: absolute;
    top: 0;
    right: 0;
    margin: 6px 6px 0 0;

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
