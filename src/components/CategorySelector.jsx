import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
import { Code, Drawings, Game, Music, Worldbuilding } from "../categories/Categories";
import { CategoryOption } from "./CategoryOption";

const Selector = styled.aside`
    position: absolute;
    top: 0;
    right: 0;
    margin: 6px 6px 0 0;
`;

export function CategorySelector() {

    return (
        <Selector>
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
        </Selector>
    );
}