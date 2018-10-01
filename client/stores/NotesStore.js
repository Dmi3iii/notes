import {EventEmitter} from 'events';

import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';

const CHANGE_EVENT='change';

let _notes={};
let _loadingError=null;
let _isLoading=true;

function formatNote(note){
  return({
    id: note._id,
    title: note.title,
    text: note.text,
    color: note.color || '#FFFFFF',
    createdAt: note.createdAt
  });
}

const TasksStore = Object.assign({},EventEmitter.prototype,{
  isLoading(){
    return _isLoading;
  },
  getNotes(){
    return _notes;
  },
  emitChange(){
    this.emit(CHANGE_EVENT);
  },
  addChangeLisener(cb){
    this.on(CHANGE_EVENT, cb);
  },
  removeChangeLisener(cb){
    this.removeLisener(CHANGE_EVENT,cb);
  }
});

AppDispatcher.register(function(action){
  switch(action.type){
    case AppConstants.LOAD_NOTES_REQUEST:{
      _isLoading=true;
      TasksStore.emitChange();
      break;
    }
    case AppConstants.LOAD_NOTES_SUCCESS:{
      _isLoading=false;
      _notes=action.notes.map(formatNote);
      _loadingError=null;

      TasksStore.emitChange();
      break;
    }
    case AppConstants.LOAD_NOTES_FAIL:{
      _loadingError=action.error;

      TasksStore.emitChange();
      break;
    }
    default: {
      console.log('No such handler');
    }
  }
});

export default TasksStore;
