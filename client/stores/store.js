import {createStore, applyMiddleware} from 'redux';
import notesReducer from '../reducers/NoteReducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const store=createStore(notesReducer,applyMiddleware(thunk,logger));
