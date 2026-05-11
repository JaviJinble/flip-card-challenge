import { css } from "@emotion/react";

export const layout = css`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 30px;
    width: 100%;
    height: 100%;
    


    & > header {
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: start;
        flex-shrink: 0;

        & > h1 {
            display: flex;
            align-items: center;
            gap: 5px;
            margin: 0 0 10px;
            font-size: 30px;
            color: transparent;
            -webkit-text-fill-color: transparent;
            background: linear-gradient(90deg,rgba(115, 10, 36, 1) 0%, rgba(131, 166, 109, 1) 100%);
            background-clip: text;
            -webkit-background-clip: text;
            cursor: default;

            & svg:nth-of-type(1) {
                color: #882431;
            }

            & svg:nth-last-of-type(1) {
                color: #6ca381;
            }
        }

        & > h3 {
            margin: 0;
            color: #c5c5c5;
            cursor: default;
        }

    }

`;

export const cardBoard = (mode, cardCount) => {
    const columnCount =
        mode === "hell" ? 12 :
        mode === "hard" ? 8 :
        mode === "challenge" && cardCount === 12 ? 4 :
        mode === "challenge" && cardCount === 16 ? 4 :
        mode === "challenge" && cardCount === 24 ? 8 :
        mode === "challenge" && cardCount === 32 ? 8 :
        mode === "challenge" && cardCount === 40 ? 10 :
        mode === "challenge" && cardCount === 48 ? 12 :
        4;

    return css`
        display: grid;
        grid-template-columns: repeat(${columnCount}, auto);
        justify-content: center;
        align-content: center;
        gap: clamp(4px, 0.8cqw, 12px);
        box-sizing: border-box;
        margin-top: 20px;
        padding: 20px;
        width: 100%;
        flex: 1;
        overflow: hidden;
        container-type: inline-size;
    `;
};

export const centerContainer = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    flex-grow: 1;

    & > h1 {
        margin: 0;
        font-size: clamp(32px, 7vmin, 70px);
        color: #c5c5c5;
        cursor: default;
    }

    @keyframes startButton {
        0% {
            transform: scale(100%);
        }

        100% {
            transform: scale(110%);
        }
        
    }

    & button:first-of-type {
        border: none;
        font-size: clamp(24px, 4vmin, 30px);
        font-weight: 600;
        color: transparent;
        -webkit-text-fill-color: transparent;
        background: linear-gradient(90deg,rgba(115, 10, 36, 1) 0%, rgba(131, 166, 109, 1) 100%);
        background-clip: text;
        -webkit-background-clip: text;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        text-shadow: 0 0 7px #ffffff33;
        animation-name: startButton;
        animation-duration: 1s;
        animation-timing-function: ease-in-out;
        animation-iteration-count: infinite;
        animation-direction: alternate;


        &:hover {
            animation-iteration-count: 0;
            transform: scale(110%);
        }
    }
`;

export const backButton = css`
    border: none;
    background-color: transparent;
    font-size: clamp(20px, 4vmin, 30px);
    font-weight: 400;
    text-shadow: 0 0 6px #ffffff33;
    color: #8a8a8a;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
        color: #c5c5c5;
        transform: translateX(-5px);
    }
`;

export const timeGauge = css`
    margin-top: 10px;
    width: 100%;
    height: clamp(8px, 1.5vmin, 14px);
    border-radius: 999px;
    background-color: #333;
    overflow: hidden;
`;

export const timeGaugeBar = (ratio) => css`
    width: ${Math.max(0, Math.min(ratio, 1)) * 100}%;
    height: 100%;
    border-radius: 999px;
    background: linear-gradient(90deg, #882431, #6ca381);
    transition: width 0.1s linear;
`;