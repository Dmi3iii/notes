import {createStore, applyMiddleware/* ,compose */} from 'redux';
import thunk from 'redux-thunk';
// import logger from 'redux-logger'; //вместо этого логгера, более функциональный redux-devtools-extension
import { composeWithDevTools } from 'redux-devtools-extension';
import notesReducer from '../reducers/NoteReducers';

const store = createStore(
	notesReducer,
	composeWithDevTools(applyMiddleware(thunk/* ,logger */)));

export default store;
