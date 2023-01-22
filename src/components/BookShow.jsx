import { useState } from "react";

// components
import BookEdit from "./BookEdit";

function BookShow({ book, deleteBookById, editBookById }) {
	const [showEdit, setShowEdit] = useState(false);

	const handleDeleteClick = () => {
		deleteBookById(book.id);
	};

	const handleEditClick = () => {
		setShowEdit(!showEdit);
	};

	const handleSubmit = (id, newTitle) => {
		setShowEdit(false);
		editBookById(id, newTitle);
	};

	return (
		<div className="book-show">
			<img src={`https://picsum.photos/seed/${book.id}/300/200`} alt="books" />
			<div>
				{showEdit ? (
					<BookEdit book={book} onSubmit={handleSubmit} />
				) : (
					<h3>{book.title}</h3>
				)}
			</div>
			<div className="actions">
				<button className="edit" onClick={handleEditClick}>
					Edit
				</button>
				<button className="delete" onClick={handleDeleteClick}>
					Delete
				</button>
			</div>
		</div>
	);
}

export default BookShow;
