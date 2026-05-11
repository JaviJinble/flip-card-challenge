import { useParams } from "react-router-dom";
import * as s from "./styles"
import { GiCardRandom } from "react-icons/gi";
import GameCard from "../../components/GameCard/GameCard";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function Game() {
    const { mode } = useParams();
    const username = localStorage.getItem("username");

    const [cards, setCards] = useState([]);
    const [started, setStarted] = useState(false);
    const [ timer, setTimer ] = useState(0);
    const timeInterVal = useRef(null);
    const navigate = useNavigate();


    const handleBackOnClick = () => {
        navigate("/");
    }

    const modeOptions = {
        normal: 12,
        hard: 24,
        hell: 48,
    };

    const cardCount = modeOptions[mode] || 12;

    const msStr = timer.toString();
    const sec = msStr.substring(0, msStr.length - 3) || 0;
    const ms = msStr.substring(msStr.length - 3);

    const handleStartOnClick = () => {
        setStarted(true);
        setTimer(0);
    }

    const handleCardOpenOnClick = (id) => {
        if (cards.filter(card => card.isOpen && !card.isAnswer).length > 1) {
            return;
        }
        setCards(cards.map(card => {
            if (card.id === id) {
                return {
                    ...card,
                    isOpen: true,
                }
            }

            return card;
        }));
    }

    useEffect(() => {
        const openCards = cards.filter(card => card.isOpen && !card.isAnswer);
        const answerCards = cards.filter(card => card.isAnswer);
        if (answerCards.length === cardCount && cards.length !== 0) {
            setStarted(false);
        }

        if (openCards.length === 2) {
            if (openCards[0].content === openCards[1].content) {
                setCards(cards.map(card => {
                    if (card.id === openCards[0].id || card.id === openCards[1].id) {
                        return {
                            ...card,
                            isAnswer: true,
                        }
                    }
                    return card;
                }));
            } else {
                setTimeout(() => {
                    setCards(cards.map(card => {
                        if (!card.isAnswer) {
                            return {
                                ...card,
                                isOpen: false,
                            }
                        }

                        return card;
                    }));
                }, 500);
            }
        }
    }, [cards, cardCount]);


    useEffect(() => {
        if (started) {
            let randomNums = [];

            while (randomNums.length < cardCount) {
                const newNum = Math.floor((Math.random() * 100) + 1);

                if (randomNums.includes(newNum)) {
                    continue;
                }

                randomNums = [...randomNums, newNum, newNum];
            }

            for (let i = 0; i < randomNums.length; i++) {
                const j = Math.floor(Math.random() * (i + 1));
                [randomNums[i], randomNums[j]] = [randomNums[j], randomNums[i]];
            }

            setCards(randomNums.map((num, index) => ({
                id: index + 1,
                content: num,
                isOpen: false,
                isAnswer: false,
            })));

            setTimer(0);
        }
    }, [started]);

    useEffect(() => {
    if (started && !timer) {
        const now = new Date();
        const nowTime = now.getTime();

        timeInterVal.current = setInterval(() => {
            setTimer(new Date().getTime() - nowTime);
        }, 10);
    } else if (!started && !!timer) {
        clearInterval(timeInterVal.current)
    }
}, [started]);


    return <>
        <div css={s.layout}>
            <header>
                <h1><GiCardRandom />CARD MATCING GAME<GiCardRandom /></h1>
                <h3>Player: {username} Time: {sec}.{ms}</h3>
            </header>
            <main>
                {
                    started
                        ? cards.map(card => <GameCard key={card.id} card={card} onClick={() => handleCardOpenOnClick(card.id)} />)
                        :
                        <div css={s.centerContainer}>
                            {
                                !started  && !!timer && <h1>Time: {sec}.{ms}</h1>
                            }
                            {
                                !started  && !timer
                                ? <button onClick={handleStartOnClick}>게임시작</button>
                                : <button onClick={handleStartOnClick}>다시하기</button>
                            }

                            <button css={s.backButton} onClick={handleBackOnClick}>뒤로가기</button>
                        </div>
                }

                
            </main>
        </div>
    </>
}

export default Game;