import Constants from '../constants/AppConstants';

let initialState={
  _notes:[{_id:1,title:'test title 1',text:'test text 1',color:'#CFD8DC'},
          {_id:2,title:'test title 2',text:'test text 2',color:'#CCFF90'}],
  _loadingError:null,
  _isLoading:false,
  editingNote:{title:'',text:'',color:'#ffffff'}
};

let notesReducer = (state=initialState,action) => {
  switch (action.type) {
    case Constants.LOAD_NOTES_REQUEST:
    {
      return Object.assign({},state, {_loadingError:null, _isLoading:true, _notes:[]});
    }
      //return {...state, _loadingError:null, _isLoading:true, _notes:[]};
    case Constants.LOAD_NOTES_SUCCESS:
    {
      return Object.assign({}, state, {_loadingError:null, _isLoading:false, _notes:action.notes});
    }
    case Constants.LOAD_NOTES_SUCCESS:
    {
      return Object.assign({}, state, {_loadingError:action.error, _isLoading:false, _notes:[]});
    }
    case Constants.EDITING_NOTE_TITLE:
    {
      let newState=Object.assign({}, state);
      newState.editingNote.title=action.title;
      return newState;
    }
    case Constants.EDITING_NOTE_TEXT:
    {
      let newState=Object.assign({}, state);
      newState.editingNote.text=action.text;
      return newState;
    }
    case Constants.EDITING_NOTE_COLOR:
    {
      let newState=Object.assign({}, state);
      newState.editingNote.color=action.color;
      return newState;
    }
    default:
        return state;
  }
};

export default notesReducer;
