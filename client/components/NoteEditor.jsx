import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import ColorPicker from './ColorPicker.jsx';
import {editNoteTitle, editNoteText, editNoteColor,
	createNote, editNoteSet} from '../actions/NotesActions';

import './NoteEditor.less';

class NoteEditor extends Component {
	handleTitleChange = (event) => {
		const {dispatch} = this.props;
		dispatch(editNoteTitle(event.target.value));
	}

	handleTextChange = (event) => {
		const {dispatch} = this.props;
		dispatch(editNoteText(event.target.value));
	}

	handleColorChange = (color) => {
		// console.log('color :', {color});
		const {dispatch} = this.props;
		dispatch(editNoteColor(color));
	}

	handleNoteCencel = () => {
		const {dispatch} = this.props;
		dispatch(editNoteSet());
	}

	handleNoteAdd = () => {
		const {dispatch, id, title, text, color} = this.props;
		const newNote = {id, title, text, color};
		// console.log('new note', newNote);
		dispatch(createNote(newNote));
		dispatch(editNoteSet());
	}

	render() {
		const {id, title, text, color} = this.props;
		const style = {backgroundColor: color};
		return (
			<div className="NoteEditor" style={style}>
				<input
					type="text"
					className="NoteEditor__title"
					style={style}
					placeholder="Введите заголовок"
					value={title}
					onChange={this.handleTitleChange}
				/>
				<textarea
					className="NoteEditor__text"
					style={style}
					placeholder="Введите текст заметки"
					rows={5}
					value={text}
					onChange={this.handleTextChange}
				/>
				<div className="NoteEditor__footer">
					<ColorPicker
						value={color}
						onChange={this.handleColorChange}
					/>
					<button
						className={!(text && title) ? 'NoteEditor__button disabled' : 'NoteEditor__button'}
						type="button"
						disabled={!(text && title)}
						onClick={this.handleNoteAdd}
					>
						{id ? 'Сохранить' : 'Добавить'}
					</button>
					{id
						? (
							<button
								className="NoteEditor__button__cencel"
								type="button"
								onClick={this.handleNoteCencel}
							>
							Отмена
							</button>
						)
						: null
					}
				</div>
			</div>
		);
	}
}

function mapStateToProps(store) {
	return {
		id: store.editingNote.id,
		title: store.editingNote.title,
		text: store.editingNote.text,
		color: store.editingNote.color
	};
}

NoteEditor.propTypes = {
	editNoteText: PropTypes.func,
	editNoteTitle: PropTypes.func,
	editNoteColor: PropTypes.func,
	dispatch: PropTypes.func,
	id: PropTypes.number,
	title: PropTypes.string,
	text: PropTypes.string,
	color: PropTypes.string
};


export default connect(mapStateToProps)(NoteEditor);
