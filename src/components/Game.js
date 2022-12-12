/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import Fields from "./utils"

export default function Game() {

    

    return (
        <><div className="area">
            <div className="player">Next Player: </div>
            <div className="playarea">
                <div className="grid-container">
                    <button className="field"></button>
                    <button className="field"></button>
                    <button className="field"></button>
                </div>
                <div className="grid-container">
                    <button className="field"></button>
                    <button className="field"></button>
                    <button className="field"></button>
                </div>
                <div className="grid-container">
                    <button className="field"></button>
                    <button className="field"></button>
                    <button className="field"></button>
                </div>
            </div>
            <button class="button1" style={{"vertical-align":"middle"}}><span>New Game</span></button>
        </div></>
    );
}