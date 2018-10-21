//import AppDispatcher from '../dispatcher/AppDispatcher';
import Constants from '../constants/AppConstants';

import api from '../api';

export let editNoteTitle = (title) =>{
    return {type:Constants.EDITING_NOTE_TITLE,
            title}
}
export let editNoteText = (text) =>{
    return {type:Constants.EDITING_NOTE_TEXT,
            text}
}
export let editNoteColor = (color) =>{
    return {type:Constants.EDITING_NOTE_COLOR,
            color}
}

export let createNote = (note) => {
  console.log('create note:', note);
  return dispatch => {
    api.createNote(note)
    .then(() => this.loadNotes())
    .catch(err => console.error(err));
  }
}

export let deleteNote = (noteId) => {
  return dispatch =>{
    api.deleteNote(noteId)
    .then(() => loadNotes())
    .catch(err => console.error(err));
  }
}

export let loadNotes = () => {
  return dispatch => {

    dispatch({
      type: Constants.LOAD_NOTES_REQUEST
    });

    console.log('load notes');

    api.listNotes()
    .then(({ data }) =>
        {
            dispatch({
              type: Constants.LOAD_NOTES_SUCCESS,
              notes: data});
            console.log('notes loaded',data);
        }
    )
    .catch(err =>
        {
            dispatch({
              type: Constants.LOAD_NOTES_FAIL,
              error: err})
        }
    );
  }
}

/*const NoteActions = {
    loadNotes() {
        AppDispatcher.dispatch({
            type: Constants.LOAD_NOTES_REQUEST
        });

        api.listNotes()
        .then(({ data }) =>
            AppDispatcher.dispatch({
                type: Constants.LOAD_NOTES_SUCCESS,
                notes: data
            })
        )
        .catch(err =>
            AppDispatcher.dispatch({
                type: Constants.LOAD_NOTES_FAIL,
                error: err
            })
        );
    },

    createNote(note) {
        api.createNote(note)
        .then(() => this.loadNotes())
        .catch(err => console.error(err));
    },

    deleteNote(noteId) {
        api.deleteNote(noteId)
        .then(() => this.loadNotes())
        .catch(err => console.error(err));
    }
};

export default NoteActions;*/
