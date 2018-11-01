import React from 'react';
import PropTypes from 'prop-types';
import Masonry from 'react-masonry-component';
import {connect} from 'react-redux';
import Note from './Note.jsx';

import {loadNotes, deleteNote} from '../actions/NotesActions';

import './NotesGrid.less';

class NotesGrid extends React.Component {
	componentWillMount() {
		const {loadNotes: propLoadNotes} = this.props;
		propLoadNotes();
	}

	render() {
		const masonryOptions = {
			itemSelector: '.Note',
			columnWidth: 250,
			gutter: 10,
			isFitWidth: true
		};

		const {notes, deleteNote: propDeleteNote} = this.props;
		return (
			<Masonry
				className="NotesGrid"
				options={masonryOptions}
			>
				{notes.map(note => (
					<Note
						key={note._id} // eslint-disable-line no-underscore-dangle
						noteId={note._id} // eslint-disable-line no-underscore-dangle
						title={note.title}
						color={note.color}
						deleteNote={propDeleteNote}
					>
						{note.text}
					</Note>
				),
				)
				}
			</Masonry>

		);
	}
}

function mapStateToProps(state) {
	return {
		notes: state._notes, // eslint-disable-line no-underscore-dangle
		isLoading: state._isLoading // eslint-disable-line no-underscore-dangle
	};
}

function mapDispatchToProps(dispatch) {
	return {
		deleteNote: noteId => dispatch(deleteNote(noteId)),
		loadNotes: () => dispatch(loadNotes())
	};
}

NotesGrid.propTypes = {
	notes: PropTypes.array,
	loadNotes: PropTypes.func,
	deleteNote: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(NotesGrid);
