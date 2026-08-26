import styled from 'styled-components';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const IndexWrapper = styled.nav`
    padding: 30px 60px;
    @media screen and (max-width: 640px) {
        padding: 3px 6px;
    }
`;

const IndexTitle = styled.h2`
    color: ${(props) => props.$category.lightColor};
    text-decoration: underline;
`;

const IndexList = styled.ul`
    margin-left: 36px;
    columns: 3;
    @media screen and (max-width: 640px) {
        columns: 1;
    }
`;

const IndexEntry = styled.li`
    list-style-type: square;
    margin-top: 6px;
`;

const IndexLink = styled(NavLink)`
    filter: brightness(150%);
    color: ${(props) => props.$category.lightColor};
    text-decoration: underline;
    &:hover {
        filter: brightness(200%);
    }
`;

export function WikiIndex({ items, basePath, category }) {
    const sorted = [...items].sort((a, b) => a.title.localeCompare(b.title));

    return (
        <IndexWrapper>
            <IndexTitle $category={category}>All pages</IndexTitle>
            <IndexList>
                {sorted.map((item) => (
                    <IndexEntry key={`wiki-${item.link}`}>
                        <IndexLink
                            $category={category}
                            to={`${basePath}/${item.link}`}
                        >
                            {item.title}
                        </IndexLink>
                    </IndexEntry>
                ))}
            </IndexList>
        </IndexWrapper>
    );
}

WikiIndex.propTypes = {
    items: PropTypes.array,
    basePath: PropTypes.string,
    category: PropTypes.object,
};
