import React from "react";

function Render({QuestionsArr}){
    const [cardState, SetCardstate] = React.useState("initbutton");
    const [cardAnswer, SetCardAnswer] = React.useState(QuestionsArr.resultState);
    const [resultState, SetResultState] = React.useState({});
    if(cardState === "State01"){
        return(
            <div class={cardState} onClick={() => SetCardstate("State02")}><p>{QuestionsArr.question}</p><img src="/assets/setinha.png" alt="seta"/></div>
        );
    }
    if(cardState === "State02"){
        return( <div class={cardState}><p>{QuestionsArr.answer}</p>
        <div class="BoxButtons">
            <div class="NLembrei" onClick={() => {SetCardAnswer("negative")
                                                  SetResultState({...resultState, tipo:"close-circle"})
                                                  SetCardstate("State03")
                                                  RenderIcons(resultState)
                                                 }
                                                 }>Não Lembrei</div>
            <div class="PorPouco" onClick={() => {SetCardAnswer("Warning")
                                                  SetResultState({...resultState, tipo:"help-circle"})
                                                  SetCardstate("State03")
                                                  RenderIcons(resultState)
                                                 }
                                                 }>Quase não <br/>lembrei</div>
            <div class="Zap" onClick={() =>      {SetCardAnswer("Positive")
                                                  SetResultState({...resultState, tipo:"checkmark-circle"})
                                                  SetCardstate("State03")
                                                  RenderIcons(resultState)
                                                 }
                                                 }>     Zap!</div>
            </div> 
        </div>);
    }
    if(cardState === "State03"){
        return(<div class={cardState +" "+ cardAnswer}><p>{QuestionsArr.tittle}</p><ion-icon name={resultState.tipo}></ion-icon></div>);
    }
    if(cardState === "initbutton"){
        return(
            <div className={cardState} onClick={() => SetCardstate("State01")}><p>{QuestionsArr.tittle}</p><ion-icon name="triangle-outline"></ion-icon></div>
        );
    }

}
function RenderIcons(lista){
    console.log(lista)
    return("");
}

export default function QuestionBox(){

    const QuestionsArr = [
        {tittle: "Pergunta 01",
        question:"O que é JSX?",
        answer:"Uma extensão de linguagem do JavaScript",
        state: "initbutton",
        resultState: "close-circle"
        },
         {tittle: "Pergunta 02",
         question:"O React é __",
         answer:"uma biblioteca JavaScript para construção de",
         state: "initbutton",
         resultState: "none"
        },
         {tittle: "Pergunta 03",
         question:"Componentes devem iniciar com __",
         answer:"letra maiúscula",
         state: "initbutton",
         resultState: "none"
        },
         {tittle: "Pergunta 04",
         question:"Podemos colocar __ dentro do JSX",
         answer:"expressões",
         state: "initbutton",
         resultState: "none"
        }
    ]
    
    return(
        <React.Fragment>
            <div className="questionbox">
                {QuestionsArr.map((QuestionsArr) => 
            <Render
            QuestionsArr = {QuestionsArr}
            /> 
            )}
            </div>
            <RenderIcons 
            />
        </React.Fragment>);

}