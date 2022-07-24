import React from "react";
import Render from "./renderQuestions";

export default function QuestionBox({
    QuestionsArr,
    footState,
    SetFootState }) {
    return (
        <React.Fragment>
            <div className="questionbox">
                {QuestionsArr.map((QuestionsArr, index) =>
                    <Render
                        index = {index}
                        QuestionsArr = {QuestionsArr}
                        footState    = {footState}
                        SetFootState = {SetFootState} 
                    />
                )}
            </div>


        </React.Fragment>);

}