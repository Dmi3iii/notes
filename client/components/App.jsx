import React, {Component} from 'react';

import NotesStore from '../stores/NotesStore'
import NotesActions from '../actions/NotesActions';

import NoteEditor from './NoteEditor.jsx';
import NotesGrid from './NotesGrid.jsx';

import {Provider} from 'react-redux';
import {store} from '../stores/store';

import './App.less';

/*function getStateFromFlux(){
  return {
    isLoading: NotesStore.isLoading(),
    notes: NotesStore.getNotes()
  };
}*/

class App extends Component{
  /*constructor(props){
    super(props);
    this.state=getStateFromFlux();
    this._onChange = this._onChange.bind(this);
  }

  componentWillMount(){
      NotesActions.loadNotes();
  }

  componentDidMount(){
    NotesStore.addChangeLisener(this._onChange);
  }

  componentWillUnmount(){
    NotesStore.removeChangeLisener(this._onChange);
  }

  handleNoteAdd(data){
    NotesActions.createNote(data);
  }

  handleNoteDelete(note){
    NotesActions.deleteNote(note.id);
  }*/

  render(){
    return (
        <Provider store={store}>
          <div className="App">
            <h2 className="App__header">NotesApp</h2>
            <NoteEditor />
            <NotesGrid />
          </div>
        </Provider>

      );
  }

  /*_onChange(){
    this.setState(getStateFromFlux());
  }*/
}

export default App;
