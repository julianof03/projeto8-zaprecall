import React from "react";
export default function Render({ 
    index,
    QuestionsArr, 
    footState,
    SetFootState }) {
    const [cardState, SetCardstate] = React.useState("initbutton");
    const [cardAnswer, SetCardAnswer] = React.useState(QuestionsArr.resultState);
    const [resultState, SetResultState] = React.useState();
    if (cardState === "State01") {
        return (
            <div class={cardState} onClick={() => SetCardstate("State02")}><p>{QuestionsArr.question} </p><img src="/assets/setinha.png" alt="seta" /></div>
        );
    }
    if (cardState === "State02") {
        return (<div class={cardState}><p>{QuestionsArr.answer}</p>
            <div class="BoxButtons">
                <div class="NLembrei" onClick={() => {
                    SetCardAnswer("negative")
                    SetResultState("close-circle")
                    const novosicons = [...footState, "close-circle"]
                    SetCardstate("State03")
                    SetFootState(novosicons)
                }
                }>Não Lembrei</div>
                <div class="PorPouco" onClick={() => {
                    SetCardAnswer("Warning")
                    SetResultState("help-circle")
                    const novosicons = [...footState, "help-circle"]
                    SetFootState(novosicons)
                    SetCardstate("State03")
                }
                }>Quase não <br />lembrei</div>
                <div class="Zap" onClick={() => {
                    SetCardAnswer("Positive")
                    SetResultState("checkmark-circle")
                    const novosicons = [...footState, "checkmark-circle"]
                    SetFootState(novosicons)
                    SetCardstate("State03")
                }
                }>     Zap!</div>
            </div>
        </div>);
    }
    if (cardState === "State03") {
        return (<div class={cardState + " " + cardAnswer}><p>{QuestionsArr.tittle} {index+1}</p><ion-icon name={resultState}></ion-icon></div>);
    }
    if (cardState === "initbutton") {
        return (
            <div className={cardState} onClick={() => SetCardstate("State01")}><p>{QuestionsArr.tittle} {index+1}</p><ion-icon name="triangle-outline"></ion-icon></div>
        );
    }

}