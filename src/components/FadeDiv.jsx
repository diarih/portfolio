import { fadeInUp } from 'react-animations'
import styled, { keyframes } from 'styled-components';

const fadeAnimate = keyframes`${fadeInUp}`;

const FadeDiv = styled.div`
  animation: 1s ${fadeAnimate};
`;

export default FadeDiv
