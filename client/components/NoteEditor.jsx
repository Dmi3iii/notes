import React, {Component} from 'react';
import ColorPicker from './ColorPicker.jsx'
import {connect} from 'react-redux';
import {editNoteTitle,editNoteText,editNoteColor,createNote} from '../actions/NotesActions'

import './NoteEditor.less';

class NoteEditor extends Component{

  handleTitleChange = (event)=>{
    this.props.dispatch(editNoteTitle(event.target.value));
  }

  handleTextChange = (event) => {
    this.props.dispatch(editNoteText(event.target.value));
  }
  handleColorChange = (color)=>{
    console.log('color :',{color});
    this.props.dispatch(editNoteColor(color));
  }

  handleNoteAdd = () => {
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
    const style={backgroundColor: this.props.color};
    return (
      <div className="NoteEditor" style={style}>
        <input
          type='text'
          className='NoteEditor__title'
          style={style}
          placeholder='Enter title'
          value={this.props.title}
          onChange={this.handleTitleChange}
        />
        <textarea
            className='NoteEditor__text'
            style={style}
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
