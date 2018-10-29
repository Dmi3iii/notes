import React from 'react';
import {deleteNote,editNoteSet} from '../actions/NotesActions';
import {connect} from 'react-redux';

import './Note.less';

class Note extends React.Component{

    onDelete = (e)=>{
        this.props.deleteNote(e.currentTarget.dataset.noteid);
    }

    onEdit = (e)=>{
      console.log('%cEdit note: ','color:red',this.props);
      this.props.dispatch(editNoteSet({id:this.props.noteId,title:this.props.title,text:this.props.children,color:this.props.color}));
    }

    render(){
      const style={'backgroundColor': this.props.color};
      return (
        <div className="Note" style={style}>
          <span className="Note__edit-icon" data-noteid={this.props.noteId} onClick={this.onEdit}> &#9998; </span>
          <span className="Note__del-icon" data-noteid={this.props.noteId} onClick={this.onDelete}> x </span>
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

export default connect()(Note);
