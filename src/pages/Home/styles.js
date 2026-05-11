import { css } from "@emotion/react";

export const layout = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    & > header {
        display: flex;
        justify-content: center;
        align-items: center;
        height: clamp(120px, 22vmin, 200px);

        & > h1 {
            display: flex;
            align-items: center;
            gap: clamp(3px, 1vw, 5px);
            font-size: clamp(28px, 5vmin, 50px);
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
    }

    & > main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: clamp(20px, 4vmin, 40px);
        box-sizing: border-box;
        border-radius: 8px;
        padding: clamp(12px, 3vmin, 20px);
        width: clamp(320px, 70vmin, 600px);
        height: clamp(180px, 30vmin, 250px);
    }
`;

export const usernameInput = css`
    & > input {
        box-sizing: border-box;
        border: none;
        border-radius: 50px;
        outline: none;
        width: clamp(260px, 45vmin, 340px);
        height: clamp(40px, 6vmin, 50px);
        font-size: clamp(18px, 3vmin, 24px);
        padding: 0 10px;
        text-align: center;
        color: #c3c3c3;
        background-color: #272727;
        box-shadow: 0 0 10px #5c5c5c55 inset;
        cursor: pointer;

        &:hover, &:focus {
            box-shadow: 0 0 10px #9c9c9c55 inset;
        }

        &::placeholder {
            color: #c3c3c3;
        }
    }
`;

export const startButton = css`
    & > button {
        border: none;
        width: clamp(260px, 45vmin, 340px);
        height: clamp(28px, 5vmin, 40px);
        font-size: clamp(28px, 5vmin, 40px);
        font-weight: 500;
        text-shadow: 0 0 5px #fafafa44;
        color: #c5c5c5;
        background-color: transparent;
        cursor: pointer;

        &:hover {
            text-shadow: 0 0 10px #fafafa88;
        }

        &:active {
            text-shadow: 0 0 10px #a52954b7;
        }
    }
`;

export const modeButtons = css`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: clamp(8px, 2vmin, 15px);

    & > button {
        border: none;
        border-radius: 8px;
        padding: clamp(8px, 1.5vw, 10px) clamp(12px, 2.5vw, 18px);
        font-size: clamp(14px, 2.2vmin, 18px);
        font-weight: 600;
        color: #c5c5c5;
        background-color: #272727;
        cursor: pointer;

        &:hover {
            box-shadow: 0 0 10px #fafafa55;
            transform: scale(1.05);
        }
    }
`;

export const backButton = css`
    margin-bottom: 15px;
    border: none;
    background-color: transparent;
    font-size: 18px;
    font-weight: 600;
    color: #c5c5c5;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
        color: #ffffff;
        transform: translateX(-3px);
    }
`;