import { useState } from "react";

// custom hooks
import useBooksContext from "../hooks/useBooksContext";

// components
import BookEdit from "./BookEdit";

function BookShow({ book }) {
	const { deleteBookById } = useBooksContext();

	const [showEdit, setShowEdit] = useState(false);

	const handleDeleteClick = () => {
		deleteBookById(book.id);
	};

	const handleEditClick = () => {
		setShowEdit(!showEdit);
	};

	const handleSubmit = () => {
		setShowEdit(false);
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
