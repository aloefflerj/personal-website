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
    animation: ${fadeIn} 0.2s linear;
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
`;
