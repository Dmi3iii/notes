import React from 'react';

import NoteEditor from './NoteEditor.jsx';
import NotesGrid from './NotesGrid.jsx';

class App extends React.Component{
    render(){
      return (
        <div className="App">
          <h2 className="App__header">NotesApp</h2>
          <NoteEditor />
          <NotesGrid />
        </div>
        );
    }
}

export default App;
