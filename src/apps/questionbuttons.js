import React from "react";
const QuestionsArr = [
    {tittle: "Pergunta 01",
    state: "initbutton"
    },
     {tittle: "Pergunta 02",
     state: "initbutton"
    },
     {tittle: "Pergunta 03",
     state: "initbutton"
    },
     {tittle: "Pergunta 04",
     state: "State01"
    }
]
function Render(props){
    const [cardState, SetCardstate] = React.useState(props.state);
    if(cardState === "initbutton"){
        return(
            <div className={cardState} onClick={() => SetCardstate("State01")}><p>{props.tittle}</p><ion-icon name="triangle-outline"></ion-icon></div> 
        );
    }
    if(cardState === "State01"){
        return(
            <div class={cardState}><p>"Texto Pergunta"</p><img src="/assets/setinha.png" alt="seta"/></div>
        );
    }
}
export default function QuestionBox(){
    return(
    <div className="questionbox">
        {QuestionsArr.map((question) => 
        <Render
        tittle ={question.tittle}
        state = {question.state}
        />       
        )}
  </div>);

}