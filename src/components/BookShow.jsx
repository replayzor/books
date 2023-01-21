import { useState } from "react";

// components
import BookEdit from "./BookEdit";

function BookShow({ book, deleteBookById }) {
	const [showEdit, setShowEdit] = useState(false);

	const handleEditClick = () => {
		setShowEdit(!showEdit);
	};

	const handleDeleteClick = () => {
		deleteBookById(book.id);
	};

	return (
		<div className="book-show">
			<div>{showEdit ? <BookEdit /> : <h3>{book.title}</h3>}</div>
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
