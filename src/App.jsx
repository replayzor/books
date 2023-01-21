import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

// components
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
	const [books, setBooks] = useState([]);

	const deleteBookById = (id) => {
		const updatedBooks = books.filter((book) => book.id !== id);
		setBooks(updatedBooks);
	};

	const handleCreateBook = (title) => {
		const updatedBooks = [...books, { id: uuidv4(), title }];
		setBooks(updatedBooks);
	};

	return (
		<div className="app">
			<BookList books={books} deleteBookById={deleteBookById} />
			<BookCreate handleCreateBook={handleCreateBook} />
		</div>
	);
}

export default App;
