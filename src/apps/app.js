import RenderFirstScreen from './Intialscreen';
import RenderSecondScreen from './secondscreen';
import React from 'react';
export default function App(){
    const [screennum, SetScrennnum] = React.useState([0]);

    if(screennum[0] === 0){
        console.log("to");
        console.log(screennum[0]);
        return(<RenderFirstScreen screennum = {screennum} SetScrennnum = {SetScrennnum}/>  );
      }
    else{
        console.log("to mudando fml");
        return(<RenderSecondScreen />  );
      }
}
