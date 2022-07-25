import RenderFirstScreen from './Intialscreen';
import RenderSecondScreen from './secondscreen';
import React from 'react';
import "./reset.css";
export default function App(){
    const [screennum, SetScrennnum] = React.useState([0]);

    if(screennum[0] === 0){
        return(<RenderFirstScreen screennum = {screennum} SetScrennnum = {SetScrennnum}/>  );
      }
    else{
        return(<RenderSecondScreen />  );
      }
}
