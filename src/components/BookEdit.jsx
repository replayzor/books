import { useState } from "react";

// custom hooks
import useBooksContext from "../hooks/useBooksContext";

function BookEdit({ book, onSubmit }) {
	const [title, setTitle] = useState(book.title);
	const { editBookById } = useBooksContext();

	const handleChange = (e) => {
		setTitle(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		onSubmit();
		editBookById(book.id, title);
	};

	return (
		<form onSubmit={handleSubmit}>
			<label>Title</label>
			<input
				autoFocus
				className="input"
				value={title}
				onChange={handleChange}
			/>
			<button className="button is-primary">Save</button>
		</form>
	);
}

export default BookEdit;
