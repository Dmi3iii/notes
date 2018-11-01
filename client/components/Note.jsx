import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {editNoteSet} from '../actions/NotesActions';

import './Note.less';

class Note extends React.Component {
	onDelete = (e) => {
		const {deleteNote} = this.props;
		deleteNote(e.currentTarget.dataset.noteid);
	}

	onEdit = () => {
		// console.log('%cEdit note: ', 'color:red', this.props);
		const {dispatch, noteId, title, children, color} = this.props;
		dispatch(editNoteSet({id: noteId, title, text: children, color}));
	}

	render() {
		const {noteId, title, children, color} = this.props;
		const style = {backgroundColor: color};
		return (
			<div className="Note" style={style}>
				<span
					className="Note__edit-icon"
					role="button"
					tabIndex={-1}
					data-noteid={noteId}
					onClick={this.onEdit}
					onKeyPress={() => {}}
				> &#9998;
				</span>
				<span
					className="Note__del-icon"
					role="button"
					tabIndex={-1}
					data-noteid={noteId}
					onClick={this.onDelete}
					onKeyPress={() => {}}
				> x
				</span>
				{
					title
						? <h4 className="Note__title">{title}</h4>
						: null
				}
				<div className="Note__text">{children}</div>
			</div>
		);
	}
}

Note.propTypes = {
	noteId: PropTypes.number,
	title: PropTypes.string,
	color: PropTypes.string,
	children: PropTypes.string,
	deleteNote: PropTypes.func,
	dispatch: PropTypes.func
};

export default connect()(Note);
