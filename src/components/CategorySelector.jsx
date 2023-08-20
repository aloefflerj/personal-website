import { styled } from "styled-components";
import { Blank, Code, Drawings, Game, Music, Worldbuilding } from "../categories/Categories";
import { useCategoryContext } from "../hooks/useCategoryContext";
import { PixelButton } from "./PixelButton";

const Selector = styled.aside`
    position: absolute;
    top: 0;
    right: 0;
    margin: 6px 6px 0 0;
`;

const Option = styled(PixelButton)`
    width: 160px;
    height: 80px;
    font-family: var(--default-font);
    font-weight: bold;
    font-size: 18px;
    color: ${props => props.$darkerColor};
`;

export function CategorySelector() {
    const { category, setCategory } = useCategoryContext();

    const changeCategory = (category) => {
        setCategory(category);
    };

    return (
        <Selector>
            <ul>
                <li>
                    <Option $bgColor={category.bgColor}
                        $mediumColor={category.mediumColor}
                        $darkColor={category.darkColor}
                        $darkerColor={category.darkerColor}
                        onMouseOver ={() => changeCategory(Code)}
                        onMouseLeave={() => changeCategory(Blank)}
                    >
                        Code
                    </Option>
                </li>
                <li>
                    <Option  $bgColor={category.bgColor}
                        $mediumColor={category.mediumColor}
                        $darkColor={category.darkColor}
                        $darkerColor={category.darkerColor}
                        onMouseEnter={() => changeCategory(Drawings)}
                        onMouseLeave={() => changeCategory(Blank)}
                    >
                        Drawing
                    </Option>
                </li>
                <li>
                    <Option $bgColor={category.bgColor}
                        $mediumColor={category.mediumColor}
                        $darkColor={category.darkColor}
                        $darkerColor={category.darkerColor}
                        onMouseEnter={() => changeCategory(Game)}
                        onMouseLeave={() => changeCategory(Blank)}
                    >
                        Game
                    </Option>
                </li>
                <li>
                    <Option $bgColor={category.bgColor}
                        $mediumColor={category.mediumColor}
                        $darkColor={category.darkColor}
                        $darkerColor={category.darkerColor}
                        onMouseEnter={() => changeCategory(Music)}
                        onMouseLeave={() => changeCategory(Blank)}
                    >
                        Music
                    </Option>
                </li>
                <li>
                    <Option $bgColor={category.bgColor}
                        $mediumColor={category.mediumColor}
                        $darkColor={category.darkColor}
                        $darkerColor={category.darkerColor}
                        onMouseEnter={() => changeCategory(Worldbuilding)}
                        onMouseLeave={() => changeCategory(Blank)}
                    >
                        Worldbuilding
                    </Option>
                </li>
            </ul>
        </Selector>
    );
}