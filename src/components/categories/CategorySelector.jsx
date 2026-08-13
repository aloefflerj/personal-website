import { styled } from 'styled-components';
import { CategoryNavLinks } from './CategoryNavLinks';
import { PLAYER_BAR_HEIGHT } from '../audioPlayer/GlobalPlayerBar';

const Selector = styled.aside`
    position: absolute;
    top: calc(${PLAYER_BAR_HEIGHT} + 6px);
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
