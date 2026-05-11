import * as s from "./styles"

function GameCard({card, onClick}) {
    const  { id, content, isOpen } = card

    return <>
        <div css={s.scene} onClick={onClick}>
            <div css={s.layout(isOpen)}>
                <div css={s.front}>
                    {content}
                </div>
                <div css={s.back}>
                    <div css={s.container}>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>




    </>





}

export default GameCard;