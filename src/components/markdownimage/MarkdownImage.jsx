import styled from 'styled-components';

const Image = styled.img`
    max-width: 80%;
`;

export function MarkdownImage(props) {
    return <Image {...props} />;
}
