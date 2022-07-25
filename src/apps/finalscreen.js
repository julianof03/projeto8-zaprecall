
import "./Finalscreen.css";
export default function RenderFinalScreen ({
    num,
    footState,
    negatives,
    SetNegatives
}){
    if(num === 4){
        let errornum = 0;
        for(let i = 0; i < footState.length; i++){         
            if(footState[i] === "close-circle"){
                errornum++;
             } 
        }
        if(errornum > 0){
            return (
                <div class="barrafinal">
                <div><img src="assets/sad.png" alt="sadimage"/><p>Putz...</p> </div>
                <div><p>Ainda faltam aguns... <br/> Mas não desanime!</p></div>
                </div>
            ); 
        }else{
            return(<div class="barrafinal">
            <div><img src="assets/party.png" alt="ebaimage"/><p>Parabénns!</p> </div>
            <div><p>Você não esqueceu de <br/> de nenhum flashcard!</p></div>
            </div>)
        }
    }
    return (""
    );
}