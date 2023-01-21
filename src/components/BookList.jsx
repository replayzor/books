// components
import BookShow from "./BookShow";

function BookList({ books, deleteBookById }) {
	const renderedBooks = books.map((book) => {
		const { id } = book;
		return <BookShow key={id} book={book} deleteBookById={deleteBookById} />;
	});

	return <div className="book-list">{renderedBooks}</div>;
}

export default BookList;
