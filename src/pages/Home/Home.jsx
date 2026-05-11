import { useState } from "react";
import * as s from "./styles";
import { GiCardRandom } from "react-icons/gi";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


function Home() {
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState("");
    const [showModeSelect, setShowModeSelect] = useState(false);


    const handleInputOnChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleModeOnClick = (mode) => {
        navigate(`/game/${mode}`);
    }


    const handleStartOnClick = () => {
        if (!inputValue.trim()) {
            setInputValue("");
            Swal.fire({
                title: "GAME STATE FAILED",
                text: "게임을 시작하려면 이름을 입력하세요",
                icon: "warning"
            }); 
            return;
        }
        localStorage.setItem("username", inputValue);
        setShowModeSelect(true);
    }

    return <>
        <div css={s.layout}>
            <header>
                <h1><GiCardRandom />CARD MATCING GAME<GiCardRandom /></h1>
            </header>
            <main>
                <div css={s.usernameInput}>
                    <input type="text" placeholder="플레이어 이름" value={inputValue} onChange={handleInputOnChange} />
                </div>

                {
                    showModeSelect &&
                    <div css={s.modeButtons}>
                        <button onClick={() => handleModeOnClick("normal")}>
                            NORMAL
                        </button>

                        <button onClick={() => handleModeOnClick("hard")}>
                            HARD
                        </button>

                        <button onClick={() => handleModeOnClick("hell")}>
                            HELL
                        </button>

                        <button onClick={() => handleModeOnClick("challenge")}>
                            CHALLENGE
                        </button>
                    </div>
                }

                
                {
                    !showModeSelect &&
                    <div css={s.startButton}>
                        <button onClick={handleStartOnClick}>시작하기</button>
                    </div>
                }
            </main>

        </div>
    </>
}

export default Home;