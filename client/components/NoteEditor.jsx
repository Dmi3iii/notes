import React, {Component} from 'react';
import ColorPicker from './ColorPicker.jsx'

import './NoteEditor.less';

class NoteEditor extends Component{
  constructor(props){
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
  }
  render(){
    return (
      <div className="NoteEditor">
        <input
          type='text'
          className='NoteEditor__title'
          placeholder='Enter title'
          value={this.state.title}
          onChange={this.handleTitleChange}
        />
        <textarea
            className='NoteEditor__text'
            placeholder='Enter note text'
            rows={5}
            value={this.state.text}
            onChange={this.handleTextChange}
        />
        <div className='NoteEditor__footer'>
          <ColorPicker
            value={this.state.color}
            onChange={this.handleColorChange}
          />
          <button
            className='NoteEditor__button'
            disabled={!(this.state.text && this.state.title)}
            onClick={this.handleNoteAdd}
          >
            Add
          </button>
        </div>
      </div>
    );
  }
}

export default NoteEditor;
