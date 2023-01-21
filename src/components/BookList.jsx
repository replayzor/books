// components
import BookShow from "./BookShow";

function BookList({ books, deleteBookById, editBookById }) {
	const renderedBooks = books.map((book) => {
		const { id } = book;
		return (
			<BookShow
				key={id}
				book={book}
				editBookById={editBookById}
				deleteBookById={deleteBookById}
			/>
		);
	});

	return <div className="book-list">{renderedBooks}</div>;
}

export default BookList;
