import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

// components
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
	const [books, setBooks] = useState([]);

	const editBookById = (id, newTitle) => {
		const updatedBooks = books.map((book) => {
			if (book.id === id) {
				return { ...book, title: newTitle };
			}
			return book;
		});
		setBooks(updatedBooks);
	};

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
			<h1>Reading List</h1>
			<BookList
				editBookById={editBookById}
				books={books}
				deleteBookById={deleteBookById}
			/>
			<BookCreate handleCreateBook={handleCreateBook} />
		</div>
	);
}

export default App;
