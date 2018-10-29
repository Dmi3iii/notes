import React, {Component} from 'react';

import NotesActions from '../actions/NotesActions';

import NoteEditor from './NoteEditor.jsx';
import NotesGrid from './NotesGrid.jsx';

import {Provider} from 'react-redux';
import {store} from '../stores/store';

import './App.less';

class App extends Component{
  render(){
    return (
        <Provider store={store}>
          <div className="App">
            <h2 className="App__header">Заметки</h2>
            <NoteEditor />
            <NotesGrid />
          </div>
        </Provider>

      );
  }
}

export default App;
