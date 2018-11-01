import {createStore, applyMiddleware/* ,compose */} from 'redux';
import thunk from 'redux-thunk';
// вместо этого логгера, более функциональный redux-devtools-extension
// import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import notesReducer from '../reducers/NoteReducers';

const store = createStore(
	notesReducer,
	composeWithDevTools(applyMiddleware(thunk/* ,logger */)));

export default store;
