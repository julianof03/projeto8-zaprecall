

export default function FirstButton({SetScrennnum, screennum}){
    function changeScreen(){
        const screenvalue = 1;
        console.log("to tentando mudar, juro");
        SetScrennnum([screenvalue]);
        console.log(screennum);
        
    }
    return(
        <div class="initbutton" onClick={changeScreen}>
    <p>Iniciar Recall!</p>
    </div>
    );
}

