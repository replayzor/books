import BookShow from "./BookShow";

function BookList({ books }) {
	const renderedBooks = books.map((book) => {
		const { id } = book;
		return <BookShow key={id} book={book} />;
	});

	return <div className="book-list">{renderedBooks}</div>;
}

export default BookList;
