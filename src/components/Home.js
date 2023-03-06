import React from "react";


export default function Home({createNote}) {
    return (
        <div>
            <h3> No note yet create one </h3>
            <button className="plus-btn" onClick={createNote}> Create Note</button>
        </div>
    )
}
