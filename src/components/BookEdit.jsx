import { useState } from "react";

function BookEdit({ book, editBookById, onSubmit }) {
	const [title, setTitle] = useState(book.title);

	const handleChange = (e) => {
		setTitle(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		editBookById(book.id, title);
		onSubmit();
	};

	return (
		<form onSubmit={handleSubmit}>
			<label>Title</label>
			<input className="input" value={title} onChange={handleChange} />
			<button className="button is-primary">Save</button>
		</form>
	);
}

export default BookEdit;
