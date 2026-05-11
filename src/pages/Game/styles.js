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

    & > main {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 15px;
        box-sizing: border-box;
        margin-top: 20px;
        padding: 20px;
        width: 100%;
        height: 100%;
        
        /* display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 40px;
        box-sizing: border-box;
        border-radius: 8px;
        padding: 20px;
        width: 600px;
        height: 250px; */
    }
`;

export const centerContainer = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    flex-grow: 1;

    & > h1 {
        margin: 0;
        font-size: 70px;
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

    & button {
        border: none;
        font-size: 30px;
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