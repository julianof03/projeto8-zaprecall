import React from "react";

function Render({QuestionsArr}){
    const [cardState, SetCardstate] = React.useState("initbutton");
    const [cardAnswer, SetCardAnswer] = React.useState(QuestionsArr.resultState);
    if(cardState === "State01"){
        return(
            <div class={cardState} onClick={() => SetCardstate("State02")}><p>{QuestionsArr.question}</p><img src="/assets/setinha.png" alt="seta"/></div>
        );
    }
    if(cardState === "State02"){
        return( <div class={cardState}><p>{QuestionsArr.answer}</p>
        <div class="BoxButtons">
          <div class="NLembrei" onClick={() => {SetCardAnswer("negative")
                                                SetCardstate("State03")
                                                }
                                                }>Não Lembrei</div>
          <div class="PorPouco" onClick={() => {SetCardAnswer("Warning")
                                                SetCardstate("State03")
                                                }
                                                }>Quase não <br/>lembrei</div>
          <div class="Zap" onClick={() =>      {SetCardAnswer("Positive")
                                                SetCardstate("State03")
                                                }
                                                }>     Zap!</div>
        </div> </div>);
    }
    if(cardState === "State03"){
        return(<div class={cardState +" "+ cardAnswer}><p>{QuestionsArr.tittle}</p><ion-icon name="close-circle"></ion-icon></div>);
    }
    if(cardState === "initbutton"){
        return(
            <div className={cardState} onClick={() => SetCardstate("State01")}><p>{QuestionsArr.tittle}</p><ion-icon name="triangle-outline"></ion-icon></div>
        );
    }

}
function RenderIcons(tipo, {resultState, SetResultState}){
    const NewIcons = [...resultState, tipo];
    SetResultState(NewIcons);
    console.log("carvalho");
    return(
        <div className="barraProgresso">
            <p> 0/4  CONCLUIDOS</p>
        <div class="iconesprogesso">
        {resultState.map(() => 
            console.log("carvalho")
            )}
        </div>
        </div>
    );
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
    const [resultState, SetResultState] = React.useState([
        {tipo: "close-circle"}
    ]);
    
    return(
        <React.Fragment>
            <div className="questionbox">
                {QuestionsArr.map((QuestionsArr) => 
            <Render
            QuestionsArr = {QuestionsArr}
            /> 
            )}</div>
        
 
        </React.Fragment>);

}