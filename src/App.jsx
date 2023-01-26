import { useEffect, useContext } from "react";

// context
import BooksContext from "./context/books";

// components
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
	const { fetchBooks } = useContext(BooksContext);

	useEffect(() => {
		fetchBooks();
	}, []);

	return (
		<div className="app">
			<h1>Reading List</h1>
			<BookList />
			<BookCreate />
		</div>
	);
}

export default App;
