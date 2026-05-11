import { useParams } from "react-router-dom";
import * as s from "./styles";
import { GiCardRandom } from "react-icons/gi";
import GameCard from "../../components/GameCard/GameCard";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function Game() {
  const { mode } = useParams();
  const username = localStorage.getItem("username");

  const [level, setLevel] = useState(1);
  const [remainTime, setRemainTime] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [levelChanging, setLevelChanging] = useState(false);

  const [cards, setCards] = useState([]);
  const [started, setStarted] = useState(false);
  const [timer, setTimer] = useState(0);
  const timeInterVal = useRef(null);
  const navigate = useNavigate();

  const handleBackOnClick = () => {
    navigate("/");
  };

  const modeOptions = {
    normal: 12,
    hard: 24,
    hell: 48,
  };

  const challengeLevels = [
    { level: 1, cardCount: 12, timeLimit: 30000, bonusTime: 3000 },
    { level: 2, cardCount: 16, timeLimit: 35000, bonusTime: 3000 },
    { level: 3, cardCount: 24, timeLimit: 40000, bonusTime: 4000 },
    { level: 4, cardCount: 32, timeLimit: 50000, bonusTime: 4000 },
    { level: 5, cardCount: 40, timeLimit: 60000, bonusTime: 5000 },
    { level: 6, cardCount: 48, timeLimit: 75000, bonusTime: 5000 },
  ];

  const currentChallengeLevel = challengeLevels[level - 1];

  const cardCount =
    mode === "challenge"
      ? currentChallengeLevel.cardCount
      : modeOptions[mode] || 12;

  const msStr = timer.toString();
  const sec = msStr.substring(0, msStr.length - 3) || 0;
  const ms = msStr.substring(msStr.length - 3);

  const handleStartOnClick = () => {
    setStarted(true);
    setTimer(0);
    setGameOver(false);

    if (mode === "challenge") {
      setLevel(1);
      setRemainTime(challengeLevels[0].timeLimit);
    }
  };

  const handleCardOpenOnClick = (id) => {
    const clickedCard = cards.find((card) => card.id === id);

    if (clickedCard.isOpen || clickedCard.isAnswer) {
      return;
    }

    if (cards.filter((card) => card.isOpen && !card.isAnswer).length > 1) {
      return;
    }

    setCards(
      cards.map((card) => {
        if (card.id === id) {
          return {
            ...card,
            isOpen: true,
          };
        }

        return card;
      }),
    );
  };

  useEffect(() => {
    const openCards = cards.filter((card) => card.isOpen && !card.isAnswer);
    const answerCards = cards.filter((card) => card.isAnswer);
    if (answerCards.length === cardCount && cards.length !== 0) {
      if (mode === "challenge") {
        if (level < challengeLevels.length) {
          const nextLevel = level + 1;

          setLevelChanging(true);
          setStarted(false);

          setTimeout(() => {
            setLevel(nextLevel);
            setRemainTime(challengeLevels[nextLevel - 1].timeLimit);
            setLevelChanging(false);
            setStarted(true);
          }, 1000);
        } else {
          setStarted(false);
        }
      } else {
        setStarted(false);
      }
    }

    if (openCards.length === 2) {
      if (openCards[0].content === openCards[1].content) {
        if (mode === "challenge") {
          setRemainTime((prev) => prev + currentChallengeLevel.bonusTime);
        }

        setCards(
          cards.map((card) => {
            if (card.id === openCards[0].id || card.id === openCards[1].id) {
              return {
                ...card,
                isAnswer: true,
              };
            }
            return card;
          }),
        );
      } else {
        setTimeout(() => {
          setCards(
            cards.map((card) => {
              if (!card.isAnswer) {
                return {
                  ...card,
                  isOpen: false,
                };
              }

              return card;
            }),
          );
        }, 500);
      }
    }
  }, [
    cards,
    cardCount,
    mode,
    level,
    currentChallengeLevel,
    challengeLevels.length,
  ]);

  useEffect(() => {
    if (started) {
      let randomNums = [];

      while (randomNums.length < cardCount) {
        const newNum = Math.floor(Math.random() * 100 + 1);

        if (randomNums.includes(newNum)) {
          continue;
        }

        randomNums = [...randomNums, newNum, newNum];
      }

      for (let i = 0; i < randomNums.length; i++) {
        const j = Math.floor(Math.random() * (i + 1));
        [randomNums[i], randomNums[j]] = [randomNums[j], randomNums[i]];
      }

      setCards(
        randomNums.map((num, index) => ({
          id: index + 1,
          content: num,
          isOpen: false,
          isAnswer: false,
        })),
      );

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
      clearInterval(timeInterVal.current);
    }
  }, [started]);

  useEffect(() => {
    if (mode !== "challenge" || !started) {
      return;
    }

    const interval = setInterval(() => {
      setRemainTime((prev) => {
        if (prev <= 10) {
          clearInterval(interval);
          setStarted(false);
          setGameOver(true);
          return 0;
        }

        return prev - 10;
      });
    }, 10);

    return () => clearInterval(interval);
  }, [mode, started]);

  return (
    <>
      <div css={s.layout}>
        <header>
          <h1>
            <GiCardRandom />
            CARD MATCING GAME
            <GiCardRandom />
          </h1>
          <h3>
            Player: {username} Time: {sec}.{ms}
            {mode === "challenge" &&
              ` Level: ${level} Remain: ${(remainTime / 1000).toFixed(1)}`}
          </h3>
          {mode === "challenge" && started && (
            <div css={s.timeGauge}>
              <div
                css={s.timeGaugeBar(
                  remainTime / currentChallengeLevel.timeLimit,
                )}
              ></div>
            </div>
          )}
        </header>
        <main css={s.cardBoard(mode, cards.length)}>
          {levelChanging ? (
            <div css={s.centerContainer}>
              <h1>LEVEL {level + 1}</h1>
            </div>
          ) : started ? (
            cards.map((card) => (
              <GameCard
                key={card.id}
                card={card}
                mode={mode}
                onClick={() => handleCardOpenOnClick(card.id)}
              />
            ))
          ) : (
            <div css={s.centerContainer}>
              {!started && !!timer && (
                <h1>
                  Time: {sec}.{ms}
                </h1>
              )}
              {!started && !timer ? (
                <button onClick={handleStartOnClick}>게임시작</button>
              ) : (
                <button onClick={handleStartOnClick}>다시하기</button>
              )}

              <button css={s.backButton} onClick={handleBackOnClick}>
                뒤로가기
              </button>
            </div>
          )}
        </main>
      </div>
    </>
  );
}

export default Game;
