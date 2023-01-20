import { useState } from "react";

function BookCreate({ handleCreateBook }) {
	const [title, setTitle] = useState("");

	const handleChange = (e) => {
		setTitle(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		handleCreateBook(title);
		setTitle("");
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label>Title</label>
				<input value={title} onChange={handleChange} />
				<button>Add Book</button>
			</form>
		</div>
	);
}

export default BookCreate;
