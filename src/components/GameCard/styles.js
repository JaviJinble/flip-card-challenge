import { css } from "@emotion/react";

export const scene = (mode) => css`
    width: ${
        mode === "hell"
            ? "clamp(26px, 4cqw, 50px)"
            : mode === "hard"
            ? "clamp(34px, 5.5cqw, 72px)"
            : "clamp(42px, 7cqw, 90px)"
    };

    aspect-ratio: 8 / 11;
    perspective: 800px;
    cursor: pointer;
`;

export const layout = (isOpen) => css`
    position: relative;
    border-radius: clamp(4px, 1vw, 8px);
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: all 0.16s ease-in-out;
    box-shadow: 0 0 clamp(5px, 1vw, 10px) #ffffff88;
    transform: ${isOpen ? "rotateY(180deg)" : "rotateY(0deg)"};
`;

export const front = css`
    position: absolute;
    border-radius: clamp(4px, 1vw, 8px);
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    font-size: clamp(14px, 2vw, 24px);
    background-color: white;
    backface-visibility: hidden;
    transform: rotateY(180deg);
`;


export const back = css`
    position: absolute;
    border-radius: clamp(4px, 1vw, 8px);
    box-sizing: border-box;
    padding: clamp(4px, 1vw, 10px);
    width: 100%;
    height: 100%;
    background-color: #ffe2d7;
    backface-visibility: hidden;
`;

export const container = css`
    border-radius: clamp(4px, 1vw, 8px);
    width: 100%;
    height: 100%;
    background-color: #755b51;
`;