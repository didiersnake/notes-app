import React, {useState, useEffect} from 'react';
import './App.css';
import SideBar from './components/SideBar';
import Editor from './components/Editor'
import { nanoid } from 'nanoid';
import Home from './components/Home';
import SPlit from 'react-split';
function App() {
  const data = localStorage.getItem("notes");

  const [notes, setNotes] = useState(JSON.parse(data));
  const [currentNoteId, setCurrentNoteId] = useState(
    (notes[0] && notes[0].id) || ""
  ) ;
  
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes))
  }, [notes]);
  
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

  return notes.length > 0 ? (
    <div className='App'>
      <SPlit sizes={[25, 75]} direction="horizontal"
        className="container">
        <SideBar
          notes={notes} 
          setCurrentNoteId={setCurrentNoteId}
          currentNoteId={currentNoteId}
          creatNote={creatNote}
        />

        <Editor currentNote={findCurrentNote()} updateNote={updateNote} />
      </SPlit>
    </div>
  ) : (
    <div className="App">
      <Home createNote={creatNote} />
    </div>
  );
}

export default App;
