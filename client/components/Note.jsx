import React from 'react';
import {deleteNote} from '../actions/NotesActions';
import './Note.less';

class Note extends React.Component{

    onDelete = (e)=>{
        this.props.deleteNote(e.currentTarget.dataset.noteid);
    }

    render(){
      const style={backgroundColor: this.props.color};
      return (
        <div className="Note" style={style}>
          <span className="Note__del-icon" data-noteid={this.props.noteId} onClick={this.onDelete}> X </span>
          {
            this.props.title?
              <h4 className="Note__title">{this.props.title}</h4>
              : null

          }
          <div className="Note__text">{this.props.children}</div>
        </div>
      );
    }
}

export default Note;
