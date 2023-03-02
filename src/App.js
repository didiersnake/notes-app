import React, {useState} from 'react';
import './App.css';
import SideBar from './components/SideBar';
import Editor from './components/Editor'
import { nanoid } from 'nanoid';

function App() {

    const [notes, setNotes] = useState([]);
    const [currentNoteId, setCurrentNoteId] = useState(
      (notes[0] && notes[0].id) || ""
    );

    function creatNote() {
      const newNode = { id: nanoid(), body: "Enter your text..." };
      setNotes((prevState) => {
        return [...prevState, newNode];
      });
      setCurrentNoteId(newNode.id);
    }
  // set editor value from currentNote ID
  function findCurrentNote() {
    return notes.find((item) => {
      return item.id === currentNoteId  
    }) || notes[0] 
  }
  
  // On currentNote ID value change, change the editor 
  function updateNote(text) {
    return setNotes((prevState) => notes.map((note) => 
      note.id === currentNoteId ? { ...note, body: text }
        : prevState))
  }

  return (
    <div className="App">
      
      <SideBar notes={notes} setCurrentNoteId={setCurrentNoteId}
        currentNoteId={currentNoteId} creatNote={creatNote} />
      
      <Editor currentNote={findCurrentNote()} updateNote={updateNote} />
      
    </div>
  );
}

export default App;
