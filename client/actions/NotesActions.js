import Constants from '../constants/AppConstants';

import api from '../api';

export let editNoteTitle = (title) =>{
	return {type:Constants.EDITING_NOTE_TITLE,
		title};
};

export let editNoteText = (text) =>{
	return {type:Constants.EDITING_NOTE_TEXT,
		text};
};

export let editNoteColor = (color) =>{
	return {type:Constants.EDITING_NOTE_COLOR,
		color};
};

export let editNoteSet = (note) =>{
	//console.log('%cAction NoteSet:','color:red',note);
	if(note)
		return {type:Constants.EDITING_NOTE_SET, note};
	else
		return {type:Constants.EDITING_NOTE_SET};
};
export let createNote = (note) => {
	if(!note.id)
		return dispatch => {
			api.createNote(note)
				.then(() => dispatch(loadNotes()))
				.catch(err => console.error(err)); // eslint-disable-line no-console
		};
	else
		return dispatch => {
			api.editNote(note)
				.then(() => dispatch(loadNotes()))
				.catch(err => console.error(err)); // eslint-disable-line no-console
		};
};

export let deleteNote = (noteId) => {
	return dispatch =>{
		api.deleteNote(noteId)
			.then(() => dispatch(loadNotes()))
			.catch(err => console.error(err)); // eslint-disable-line no-console
	};
};

export let loadNotes = () => {
	return (dispatch) => {

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
				//console.log('notes loaded',data);
			}
			)
			.catch(err =>
			{
				dispatch({
					type: Constants.LOAD_NOTES_FAIL,
					error: err});
			}
			);
		//}, 2000);
	};
};
