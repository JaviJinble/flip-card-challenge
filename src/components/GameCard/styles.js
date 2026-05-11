import { css } from "@emotion/react";

export const scene = css`
    width: 160px;
    height: 220px;
    perspective: 800px;
    cursor: pointer;
    
    
    `;

export const layout = (isOpen) => css`
    position: relative;
    border-radius: 8px;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: all 0.3s ease-in-out;
    box-shadow: 0 0 10px #ffffff88;
    transform: ${isOpen ? "rotateY(180deg)" : "rotateY(0deg)"};
    
`;

export const front = css`
    position: absolute;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    background-color: white;
    backface-visibility: hidden;
    transform: rotateY(180deg);
`;


export const back = css`
    position: absolute;
    border-radius: 8px;
    box-sizing: border-box;
    padding: 10px;
    width: 100%;
    height: 100%;
    background-color: #ffe2d7;
    backface-visibility: hidden;
`;

export const container = css`
    border-radius: 8px;
    width: 100%;
    height: 100%;
    background-color: #755b51;
`;