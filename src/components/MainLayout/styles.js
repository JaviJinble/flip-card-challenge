import { css } from "@emotion/react";

export const layout = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
`;
export const container = css`
    box-sizing: border-box;
    border-radius: clamp(6px, 1vw, 12px);
    padding: clamp(10px, 2vw, 20px);

    width: min(1400px, 96vw);
    aspect-ratio: 16 / 11;

    background-color: #111111;

    box-shadow:
        0 0 clamp(10px, 2vw, 20px)
        clamp(4px, 1vw, 10px)
        #000000aa;
`;
export const containerBorder = css`
    box-sizing: border-box;
    border: clamp(1px, 0.2vw, 2px) solid #63782f44;
    border-radius: clamp(6px, 1vw, 12px);

    width: 100%;
    height: 100%;
`;