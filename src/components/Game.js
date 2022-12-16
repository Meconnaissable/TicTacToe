/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState } from "react";


export default function Game() {

    const [fields, setFields] = useState(Array(9).fill(""))
    const [player, setPlayer] = useState(true);

    const [winner, setwinner] = useState("")

    function buttonClick(i) {
        if (winner !== '') {
            return
        }

        fields[i] = player ? "X" : "O"
        console.log(fields)
        setFields([...fields]) /*alter array in neuen*/
        setPlayer(!player)

        setwinner(winningpattern(fields))
    }
    /* andere Variante: const buttonClick = (i)=>{}*/


    function winningpattern(fields) {

        const pattern = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [2, 4, 6], [0, 4, 8],
        ]

        //vergleichen, ob gleiches symbol mit einem Gewinnmuster übereinstimmt:
        for (let [a, b, c] of pattern) {
            if (fields[a] !== "" && fields[a] === fields[b] && fields[a] === fields[c]) {
                return fields[a];
            }
        }
        return "";
    }

    function newGameClick() {
        setFields(Array(9).fill(""))
        setPlayer(true)
        setwinner("")
    }

    let title;
    if (winner === "")
        title = (<div className="player">Next Player: {player ? "X" : "O"}</div>)
    else
        title = (<div className="player">The winner is {winner}</div>)


    return (
        <><div className="area">
            {title}
            <div className="playarea">
                <div className="grid-container">
                    {fields.map((field, index) => (
                        <button className="field" onClick={() => buttonClick(index)} >{field}</button>
                    ))}
                </div>
            </div>
            <button class="button1" onClick={() => newGameClick()} >New Game</button>
        </div></>
    );
}