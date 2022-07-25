import React from 'react';
import QuestionBox from './questionbuttons';
import RenderIcons from "./Rendericons";
import RenderFinalScreen from './finalscreen';
import "./Finalscreen.css";
import RenderSecondLogo from './LogoScreen2';

const QuestionsArr = [
  {tittle: "Pergunta",
  question:"O que é JSX?",
  answer:"Uma extensão de linguagem do JavaScript",
  state: "initbutton",
  resultState:"close-circle"
  },
   {tittle: "Pergunta",
   question:"O React é __",
   answer:"uma biblioteca JavaScript para construção de",
   state: "initbutton",
   resultState:"close-circle"
  },
   {tittle: "Pergunta",
   question:"Componentes devem iniciar com __",
   answer:"letra maiúscula",
   state: "initbutton",
   resultState:"close-circle"
  },
   {tittle: "Pergunta",
   question:"Podemos colocar __ dentro do JSX",
   answer:"expressões",
   state: "initbutton",
   resultState:"close-circle"
  },
  {tittle: "Pergunta",
   question:"O ReactDOM nos ajuda __ ",
   answer:"interagindo com a DOM para colocar componentes React na mesma",
   state: "initbutton",
   resultState:"close-circle"
  },
  {tittle: "Pergunta",
   question:"Usamos o npm para __",
   answer:"gerenciar os pacotes necessários e suas dependências",
   state: "initbutton",
   resultState:"close-circle"
  },
  {tittle: "Pergunta",
   question:"Usamos props para __",
   answer:"passar diferentes informações para componentes ",
   state: "initbutton",
   resultState:"close-circle"
  },
  {tittle: "Pergunta",
   question:"Usamos estado (state) para __ ",
   answer:"dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
   state: "initbutton",
   resultState:"close-circle"
  }

]
let forarray = []
shuffleArray(QuestionsArr)
function shuffleArray(arr) {
for (let i = arr.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [arr[i], arr[j]] = [arr[j], arr[i]];
}
for(let i = 0; i < 4; i++){
  forarray.push(arr[i])
}
  console.log(forarray);
}
        
export default function RenderSecondScreen(){
  const [footState, SetFootState] = React.useState([]);
  const [negatives, SetNegatives] = React.useState(1);
  if(footState === "close-circle"){
    SetNegatives(negatives + 1);
 }
  return (
    <React.Fragment>
      <div className="questions">
        <RenderSecondLogo />

        <QuestionBox
        QuestionsArr = {forarray}
        tittle = {forarray.tittle}
        question = {forarray.question}
        answer = {forarray.answer} 
        state = {forarray.state}
        footState = {footState}
        SetFootState = {SetFootState}
        />

        <RenderFinalScreen 
        num = {(footState.length)}
        footState = {footState}
        negatives = {negatives}
        SetNegatives = {SetNegatives}
        
        />
        <div class="barraProgresso">
          <p> {footState.length}/4  CONCLUIDOS</p>
          <div class="iconesprogesso">

        {footState.map(i =>
          <RenderIcons
          negatives = {negatives}
          SetNegatives = {SetNegatives}
          num = {footState.length}
          footState = {i}
          />)}  
          
          </div>     
        </div>
      </div>
    </React.Fragment>
  );
}