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
    .then(() => dispatch(loadNotes()))
    .catch(err => console.error(err));
  }
}

export let deleteNote = (noteId) => {
  return dispatch =>{
    api.deleteNote(noteId)
    .then(() => dispatch(loadNotes()))
    .catch(err => console.error(err));
  }
}

export let loadNotes = () => {
  return (dispatch, getState) => {

    dispatch({
      type: Constants.LOAD_NOTES_REQUEST
    });

    //setTimeout(()=>{
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
      //}, 2000);
  }
}
