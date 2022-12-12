
export function Fields({ onClick, value }) {
    return (
        <button className="field" onClick={onClick}>
            {value}
        </button>
    );
}

