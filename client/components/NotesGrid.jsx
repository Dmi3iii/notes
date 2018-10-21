import React from 'react';
import Note from './Note.jsx';
import Masonry from 'react-masonry-component';
import {connect} from 'react-redux';

import {loadNotes,deleteNote} from '../actions/NotesActions';

import './NotesGrid.less';

class NotesGrid extends React.Component{

  componentWillMount(){
      this.props.loadNotes();
  }

    render(){
      const masonryOptions={
        itemSelector: '.Note',
        columnWidth: 250,
        gutter: 10,
        isFitWidth: true
      };

      return (
        <Masonry
          className='NotesGrid'
          options={masonryOptions}
        >
        {
          this.props.notes.map(note=>
            <Note
              key={note._id}
              noteId={note._id}
              title={note.title}
              color={note.color}
              deleteNote={this.props.deleteNote}
            >
              {note.text}
            </Note>
          )
        }
      </Masonry>

      );
    }
}

function mapStateToProps(state){
  return {
    notes: state._notes
  }
}

function mapDispatchToProps(dispatch) {
  return {
    deleteNote: noteId => dispatch(deleteNote(noteId)),
    loadNotes: () => dispatch(loadNotes())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(NotesGrid);
