import { NavLink } from 'react-router-dom';
import {
    Code,
    Drawings,
    Game,
    Music,
    Worldbuilding,
} from '../../categories/Categories';
import { CategoryOption } from './CategoryOption';

export function CategoryNavLinks() {
    return (
        <ul>
            <li>
                <NavLink to={Code.categoryKey}>
                    <CategoryOption buttonCategory={Code}>
                        {Code.title}
                    </CategoryOption>
                </NavLink>
            </li>
            <li>
                <NavLink to={Drawings.categoryKey}>
                    <CategoryOption buttonCategory={Drawings}>
                        {Drawings.title}
                    </CategoryOption>
                </NavLink>
            </li>
            <li>
                <NavLink to={Game.categoryKey}>
                    <CategoryOption buttonCategory={Game}>
                        {Game.title}
                    </CategoryOption>
                </NavLink>
            </li>
            <li>
                <NavLink to={Music.categoryKey}>
                    <CategoryOption buttonCategory={Music}>
                        {Music.title}
                    </CategoryOption>
                </NavLink>
            </li>
            <li>
                <NavLink to={Worldbuilding.categoryKey}>
                    <CategoryOption buttonCategory={Worldbuilding}>
                        {Worldbuilding.title}
                    </CategoryOption>
                </NavLink>
            </li>
        </ul>
    );
}
