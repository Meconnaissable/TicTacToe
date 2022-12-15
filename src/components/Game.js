/* eslint-disable react/jsx-no-comment-textnodes */
import React, {useState} from "react";


export default function Game() {

    const [fields, setFields] = useState(Array(9).fill(""))
    const [player, setPlayer] = useState(true);

    function buttonClick (i){

        fields[i]= player ? "X" : "O"
        console.log(fields)
        setFields([...fields])
        setPlayer(!player)
    }

/*
    const buttonClick = (i)=>{
    }
*/
    return (
        <><div className="area">
            <div className="player">Next Player: </div>
            <div className="playarea">
                <div className="grid-container">
                    <button className="field" onClick={() => buttonClick(0)} >{fields[0]}</button>
                    <button className="field" onClick={() => buttonClick(1)} >{fields[1]}</button>
                    <button className="field" onClick={() => buttonClick(2)} >{fields[2]}</button>
                </div>
                <div className="grid-container">
                    <button className="field" onClick={() => buttonClick(3)} >{fields[3]}</button>
                    <button className="field" onClick={() => buttonClick(4)} >{fields[4]}</button>
                    <button className="field" onClick={() => buttonClick(5)} >{fields[5]}</button>
                </div>
                <div className="grid-container">
                    <button className="field" onClick={() => buttonClick(6)} >{fields[6]}</button>
                    <button className="field" onClick={() => buttonClick(7)} >{fields[7]}</button>
                    <button className="field" onClick={() => buttonClick(8)} >{fields[8]}</button>
                </div>
            </div>
            <button class="button1" style={{"vertical-align":"middle"}}><span>New Game</span></button>
        </div></>
    );
}