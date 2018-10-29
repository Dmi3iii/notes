import React, {Component} from 'react';
import ColorPicker from './ColorPicker.jsx'
import {connect} from 'react-redux';
import {editNoteTitle,editNoteText,editNoteColor,createNote,editNoteSet} from '../actions/NotesActions'

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
  handleNoteCencel = ()=>{
    this.props.dispatch(editNoteSet());
  }
  handleNoteAdd = () => {
    const newNote={
      id: this.props.id,
      title: this.props.title,
      text: this.props.text,
      color: this.props.color
    };
    console.log('new note', newNote);
    this.props.dispatch(createNote(newNote));
    this.props.dispatch(editNoteSet());
  }

  render(){
    const style={backgroundColor: this.props.color};
    return (
      <div className="NoteEditor" style={style}>
        <input
          type='text'
          className='NoteEditor__title'
          style={style}
          placeholder='Введите заголовок'
          value={this.props.title}
          onChange={this.handleTitleChange}
        />
        <textarea
            className='NoteEditor__text'
            style={style}
            placeholder='Введите текст заметки'
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
            className={!(this.props.text && this.props.title)?'NoteEditor__button disabled':'NoteEditor__button'}
            disabled={!(this.props.text && this.props.title)}
            onClick={this.handleNoteAdd}
          >
            {this.props.id?'Сохранить':'Добавить'}
          </button>
          {this.props.id?
            <button
              className='NoteEditor__button__cencel'
              onClick={this.handleNoteCencel}
            >
              Отмена
            </button>
            : null
          }
        </div>
      </div>
    );
  }
}

function mapStateToProps(store){
  return {
    id: store.editingNote.id,
    title: store.editingNote.title,
    text: store.editingNote.text,
    color: store.editingNote.color
  }
}


export default connect(mapStateToProps)(NoteEditor);
