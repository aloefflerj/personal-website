import { styled } from 'styled-components';
import PropTypes from 'prop-types';
import { Breadcrumbs } from '../Breadcrumbs';
import { RetractButton } from '../../elements/sidebar/RectractButton';
import { useCategoryContext } from '../../hooks/useCategoryContext';

const Content = styled.main`
    grid-area: main;
    width: 100%;
    height: auto;
    background-color: ${(props) => props.$bgColor};
`;

const Header = styled.header`
    display: flex;
    padding: 12px 0 0 12px;
    align-items: center;

    @media screen and (max-width: 640px) {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        grid-template-areas: 'main';
        gap: 0px;
    }
`;

export function CategoryContent({ category, children }) {
    const { breadcrumbTrail } = useCategoryContext();

    return (
        <Content $bgColor={category.bgColor}>
            <Header>
                <RetractButton />
                <Breadcrumbs category={category} trail={breadcrumbTrail} />
            </Header>
            {children}
        </Content>
    );
}

CategoryContent.propTypes = {
    category: PropTypes.object,
    children: PropTypes.element,
};
