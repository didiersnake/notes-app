import React, { useState } from "react";
import { nanoid } from "nanoid";

export default function SideBar(props) {

    const notesElement = props.notes.map((item, index) => {
      return (
          <div className={`note ${item.id === props.currentNoteId ? "selected-note" : ""}`}
              onClick = {()=> props.setCurrentNoteId(item.id)}
              key={item.id}>
                note {index + 1}
        </div>
      );
    });


    return (
        <div className="side-bar">
            <div className="header">
                <h1>Notes</h1>
                <button className="plus-btn" onClick={props.creatNote}> + </button>
            </div>
            <div className="notes">
                {notesElement}
            </div>
            
        </div>
    )
}
