// custom hooks
import useBookContext from "../hooks/useBooksContext";

// components
import BookShow from "./BookShow";

function BookList() {
	const { books } = useBookContext();

	const renderedBooks = books.map((book) => {
		const { id } = book;
		return <BookShow key={id} book={book} />;
	});

	return <div className="book-list">{renderedBooks}</div>;
}

export default BookList;
