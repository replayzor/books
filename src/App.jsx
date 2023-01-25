import { useEffect, useState } from "react";
import axios from "axios";

// components
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
	const [books, setBooks] = useState([]);

	const fetchBooks = async () => {
		const response = await axios.get("http://localhost:3000/books");

		setBooks(response.data);
	};

	useEffect(() => {
		fetchBooks();
	}, []);

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

	const handleCreateBook = async (title) => {
		const response = await axios.post("http://localhost:3000/books", {
			title,
		});

		const updatedBooks = [...books, response.data];
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
