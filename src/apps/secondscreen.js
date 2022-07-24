import React from 'react';
import QuestionBox from './questionbuttons';
import RenderIcons from "./Rendericons";

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
  // Loop em todos os elementos
for (let i = arr.length - 1; i > 0; i--) {
      // Escolhendo elemento aleatório
  const j = Math.floor(Math.random() * (i + 1));
  // Reposicionando elemento
  [arr[i], arr[j]] = [arr[j], arr[i]];
}
for(let i = 0; i < 4; i++){
  forarray.push(arr[i])
}
  console.log(forarray);
}
        
export default function RenderSecondScreen(){
  const [footState, SetFootState] = React.useState([]);
  return (
    <React.Fragment>
      <div className="questions">
        <div className="toplogo">
          <img className="logo" alt="logo" src="https://s3-alpha-sig.figma.com/img/e6be/467f/fb389e27e5843720979bbb7f3e94e660?Expires=1659312000&Signature=ZHoZi-XbTpZ4rTlCFu0I2YX1xoOD8UtYNOD-HHPmVsNJ6zoXO~D-tZAhZSuB1Zuipy9OozXqe31CRQ1MX1g4v2yyFF7mKH5PWQSwwZ-5IkNd0KHhxh4iAIMkvou8qj4NJV3bGZq2dOorlLekkkZsfu96iumbErNw8TL2lPh0BT9thmKtpxe9XFLpGfJvv1OKln0Lf6pC9sZ73AHSOx09VEZ1mY6VwppJM8YIoN3qkL7DQBcXwfavfE-NLPaQeIEuic5YWk3NP02c260KG0fI1B9f38QDzj~s8WpAfrpW3nO2Xz2ggwGlFUug3JMK4tlJuThWpEkwRP8hNHxoB~-NXQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
          <p>ZapRecall</p>
        </div>
        <QuestionBox
        QuestionsArr = {forarray}
        tittle = {forarray.tittle}
        question = {forarray.question}
        answer = {forarray.answer} 
        state = {forarray.state}
        footState = {footState}
        SetFootState = {SetFootState}
        />
        <div class="barraProgresso">
          <p> {footState.length}/4  CONCLUIDOS</p>
          <div class="iconesprogesso">


          {footState.map(i =>
          <RenderIcons
          num = {footState.length}
          footState = {i}
          />)}  
          
          </div>     
        </div>
      </div>
    </React.Fragment>
  );
}