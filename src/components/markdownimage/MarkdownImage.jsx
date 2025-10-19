import styled from 'styled-components';

const Image = styled.img`
    max-width: 40%;
`;

export function MarkdownImage(props) {
    return <Image {...props} />;
}
