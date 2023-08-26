import { keyframes, styled } from 'styled-components';
import PropTypes from 'prop-types';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Rotate = styled.div`
    animation: ${rotate} 2s linear infinite;
    width: 64px;
    height: 64px;
    font-size: 1.2rem;
    background-color: ${(props) => props.$bgColor};
    z-index: 20000;
    position: fixed;
    top: 50%;
    left: 50%;
    margin-top: -32px;
    margin-left: -32px;
`;

export function Spinner({ color }) {
    return <Rotate $bgColor={color} />;
}

Spinner.propTypes = {
    color: PropTypes.string,
};
