

export default function FirstButton({SetScrennnum, screennum}){
    function changeScreen(){
        const screenvalue = 1;
        SetScrennnum([screenvalue]);
        
    }
    return(
        <div className="initbutton" onClick={changeScreen}>
    <p>Iniciar Recall!</p>
    </div>
    );
}

