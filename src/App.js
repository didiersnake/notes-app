import React, {useState} from 'react';
import './App.css';
import SideBar from './components/SideBar';
import { nanoid } from 'nanoid';

function App() {

      const [notes, setNotes] = useState([]);
      const [currentNote, setCurrentNode] = useState("");

      
      function creatNote() {
        const newNode = { id: nanoid(), title: `note ${notes.length + 1}` };
        setCurrentNode(newNode.id);
        const result = setNotes((prevState) => {
          return [...prevState, newNode];
        });
        return result;
      }



  return (
    <div className="App">
      
      <SideBar notes={notes} setCurrentNoteId={setCurrentNode}
        currentNoteId={currentNote} creatNote={creatNote} />
    </div>
  );
}

export default App;
