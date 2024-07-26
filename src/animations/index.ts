import styled, { keyframes } from "styled-components"

const growHorizontal = keyframes`
  from {
    transform: scaleX(0);
    transform-origin: center;
  }
  to {
    transform: scaleX(1);
    transform-origin: center;
  }
`;
const GrowHorizontalDiv = styled.div`
animation: ${growHorizontal} 0.4s;
`

const popUp1 = keyframes`
0%{
    transform: scale(0);
    opacity: 0.0;
}
60% {
    transform: scale(1.05);
}
80% {
    transform: scale(0.95);
    opacity: 1;
}
100% {
    transform: scale(1);
    opacity: 1;
}
`
const PopUpDiv = styled.div`
animation: ${popUp1} 0.8s  
`

const typing = keyframes`
from {
    width: 0;
}
to {
    width: 100%;
}
`
const blinkCaret = keyframes`
 from, to {
    border-color: transparent;
 }
 50% {
    border-color: black;
 }
`
const TypingAnimationDiv = styled.div`
display: inline-block;
white-space: nowrap;
overflow: hidden;
border-right: 2px solid black;
font-size: 34px;
animation: ${typing} 2s steps(32, end), ${blinkCaret} 0.75s step-end infinite;

`

export { PopUpDiv, GrowHorizontalDiv, TypingAnimationDiv }