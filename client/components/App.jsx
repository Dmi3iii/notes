import React/* , {PureComponent} */ from 'react';

import {Provider} from 'react-redux';
// import NotesActions from '../actions/NotesActions';

import NoteEditor from './NoteEditor.jsx';
import NotesGrid from './NotesGrid.jsx';

import store from '../stores/store';

import './App.less';

// class App extends PureComponent {
const App = (/* props, context */) => {
	// render() {
	return (
		<Provider store={store}>
			<div className="App">
				<h2 className="App__header">Заметки</h2>
				<NoteEditor />
				<NotesGrid />
			</div>
		</Provider>
	);
	// }
};

export default App;
