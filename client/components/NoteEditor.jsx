import React, {Component} from 'react';
import ColorPicker from './ColorPicker.jsx'
import {connect} from 'react-redux';
import {editNoteTitle,editNoteText,editNoteColor,createNote} from '../actions/NotesActions'

import './NoteEditor.less';

class NoteEditor extends Component{
  constructor(props){
    super(props);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleColorChange = this.handleColorChange.bind(this);
    this.handleNoteAdd = this.handleNoteAdd.bind(this);
  }
  /*constructor(props){
    super(props);
    this.state={
      title:'',
      text:'',
      color:'#FFFFFF'
    };
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleNoteAdd = this.handleNoteAdd.bind(this);
    this.handleColorChange = this.handleColorChange.bind(this);
  }

  handleTextChange(event) {
    this.setState({text: event.target.value});
  }

  handleTitleChange(event){
    this.setState({title: event.target.value});
  }

  handleNoteAdd(){
    const newNote={
      title: this.state.title,
      text: this.state.text,
      color: this.state.color
    };

    this.props.onNoteAdd(newNote);
    this.setState({text:'',title:'',color:'#FFFFFF'});
  }

  handleColorChange(color){
    this.setState({color});
  }*/
  handleTitleChange(event){
    this.props.dispatch(editNoteTitle(event.target.value));
  }

  handleTextChange(event){
    this.props.dispatch(editNoteText(event.target.value));
  }
  handleColorChange(color){
    console.log('color :',{color});
    this.props.dispatch(editNoteColor(color));
  }

  handleNoteAdd(){
    const newNote={
      title: this.props.title,
      text: this.props.text,
      color: this.props.color
    };
    console.log('new note', newNote);
    this.props.dispatch(createNote(newNote));
    this.props.dispatch(editNoteTitle(''));
    this.props.dispatch(editNoteText(''));
    this.props.dispatch(editNoteColor('#FFFFFF'));
  }

  render(){
    return (
      <div className="NoteEditor">
        <input
          type='text'
          className='NoteEditor__title'
          placeholder='Enter title'
          value={this.props.title}
          onChange={this.handleTitleChange}
        />
        <textarea
            className='NoteEditor__text'
            placeholder='Enter note text'
            rows={5}
            value={this.props.text}
            onChange={this.handleTextChange}
        />
        <div className='NoteEditor__footer'>
          <ColorPicker
            value={this.props.color}
            onChange={this.handleColorChange}
          />
          <button
            className='NoteEditor__button'
            disabled={!(this.props.text && this.props.title)}
            onClick={this.handleNoteAdd}
          >
            Add
          </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(store){
  return {
    title: store.editingNote.title,
    text: store.editingNote.text,
    color: store.editingNote.color
  }
}


export default connect(mapStateToProps)(NoteEditor);
