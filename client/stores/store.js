import {createStore, applyMiddleware/*,compose*/} from 'redux';
import notesReducer from '../reducers/NoteReducers';
import thunk from 'redux-thunk';
//import logger from 'redux-logger'; //вместо этого логгера, более функциональный redux-devtools-extension
import { composeWithDevTools } from 'redux-devtools-extension';

export const store=createStore(notesReducer,composeWithDevTools(applyMiddleware(thunk/*,logger*/)));
