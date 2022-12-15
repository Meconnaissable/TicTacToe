/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';

// function: rfce
//immer event props in jxs verwenden zb. onClick
export function Field({ onClick, value }) {

    return (
        <div className="field"><p>{value}</p>
            <button onClick={onClick}>
                {value}
            </button>
        </div>
    );
}
/*
export function gamearea() {
    // const [fields, setFields] = useState(Array(9).fill(null))
    const [fields, setFields] = useState([9].fill(null))
    const [valueX, setvalueX] = useState(true);

    const handleClick = (i) => fields[i]

        fields[i] = valueX ? 'X' : 'O'
        setFields(fields)
        setvalueX(!valueX)

    

    const renderFields = (i) => {
        return <Field value={fields[i]} onClick={() => handleClick(i)} />
    }
}



export default Field;
*/