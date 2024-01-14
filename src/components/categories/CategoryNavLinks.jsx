import {
    Code,
    Drawings,
    Game,
    Music,
    Worldbuilding,
} from '../../categories/Categories';
import { CategoryNavLinkItem } from './CategoryNavlinkItem';

export function CategoryNavLinks() {
    return (
        <ul>
            <li>
                <CategoryNavLinkItem category={Code} />
            </li>
            <li>
                <CategoryNavLinkItem category={Drawings} />
            </li>
            <li>
                <CategoryNavLinkItem category={Game} />
            </li>
            <li>
                <CategoryNavLinkItem category={Music} />
            </li>
            <li>
                <CategoryNavLinkItem category={Worldbuilding} />
            </li>
        </ul>
    );
}
