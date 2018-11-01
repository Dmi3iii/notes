import Constants from '../constants/AppConstants';

const initialState = {
	_notes: [{_id: 1, title: 'test title 1', text: 'test text 1', color: '#CFD8DC'},
		{_id: 2, title: 'test title 2', text: 'test text 2', color: '#CCFF90'}],
	_loadingError: null,
	_isLoading: false,
	editingNote: {id: null, title: '', text: '', color: '#ffffff'}
};

const notesReducer = (state = initialState, action) => {
	switch (action.type) {
	case Constants.LOAD_NOTES_REQUEST:
	{
		// return Object.assign({},state, {_loadingError:null, _isLoading:true});
		return {...state, _loadingError: null, _isLoading: true};
	}
	case Constants.LOAD_NOTES_SUCCESS:
	{
		return {...state, _loadingError: null, _isLoading: false, _notes: action.notes};
	}
	case Constants.EDITING_NOTE_TITLE:
	{
		const newState = Object.assign({}, state);
		newState.editingNote.title = action.title;
		return newState;
	}
	case Constants.EDITING_NOTE_TEXT:
	{
		const newState = Object.assign({}, state);
		newState.editingNote.text = action.text;
		return newState;
	}
	case Constants.EDITING_NOTE_COLOR:
	{
		const newState = Object.assign({}, state);
		newState.editingNote.color = action.color;
		return newState;
	}
	case Constants.EDITING_NOTE_SET:
	{
		const newState = Object.assign({}, state);
		if (action.note) {
			newState.editingNote.id = action.note.id;
			newState.editingNote.title = action.note.title;
			newState.editingNote.text = action.note.text;
			newState.editingNote.color = action.note.color;
		} else {
			newState.editingNote.id = null;
			newState.editingNote.title = '';
			newState.editingNote.text = '';
			newState.editingNote.color = '#ffffff';
			// let {id,title,text,color}=initialState.editingNote;
			// newState.editingNote={id,title,text,color};
		}
		// console.log('%cInitialState: ','color:red; font-weigth: bold;', initialState);
		// console.log('%cnewState: ','color:red; font-weigth: bold;', newState);
		// console.log('%cNew State:','color:red',action.note,initialState.editingNote,newState);
		return newState;
	}
	default:
		return state;
	}
};

export default notesReducer;
