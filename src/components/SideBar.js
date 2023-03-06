import React from "react";

export default function SideBar(props) {

    const notesElement = props.notes.map((item, index) => {
      return (
        <div
          className={`note ${
            item.id === props.currentNoteId ? "selected-note" : ""
          }`}
          onClick={() => props.setCurrentNoteId(item.id)}
          key={item.id}
        >
          {item.body.split(" ")[0]}
          <button className="delete-btn" onClick={(e) => props.deleteNote(e, item.id)}>
            <i className="gg-trash trash-icon" />
          </button>
        </div>
      );
    });

    return (
        <div className="side-bar">
            <div className="header">
                <h1>Notes</h1>
                <button className="plus-btn" onClick={props.creatNote}> + </button>
            </div>
            <div>
                {notesElement}
            </div>
            
        </div>
    )
}
