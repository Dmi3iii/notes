import React from 'react';

import './NoteEditor.less';

class NoteEditor extends React.Component{
  constructor(props){
    super(props);
    this.state={
      title:'',
      text:'',
      color:'#FFFFFF'
    };
  }

  handleTextChange(event){
    this.setState({title: event.target.value});
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

    //this.props.onNoteAdd(newNote);
    this.setState({text:'',title:'',color:'#FFFFFF'});
  }

  render(){
    return (
      <div className="NoteEditor">
        <input
          type='text'
          className='NoteEditor__title'
          plaseholder='Enter title'
          value={this.state.title}
          onChange={this.state.handleTitleChange}
        />
        <textarea
            className='NoteEditor__text'
            plaseholder='Enter note text'
            rows={5}
            value={this.state.text}
            onChange={this.state.handleTextChange}
        />
        <div className='NoteEditor__footer'>
          <button
            className='NoteEditor__button'
            disabled={!this.state.text}
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
