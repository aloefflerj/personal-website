import { keyframes, styled } from 'styled-components';

const fadeIn = keyframes`
    from {
        opacity: 0;
    }

    to {
        opacity: 100;
    }
`;

export const Background = styled.img`
    object-fit: contain;
    width: 100%;
    height: auto;
    border: 3px solid ${(props) => props.$border};
    animation: ${fadeIn} 0.2s linear;
`;
