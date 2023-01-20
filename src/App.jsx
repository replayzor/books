import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

// components
import BookCreate from "./components/BookCreate";

function App() {
	const [books, setBooks] = useState([]);

	const handleCreateBook = (title) => {
		const updatedBooks = [...books, { id: uuidv4(), title }];
		setBooks(updatedBooks);
	};

	return (
		<div>
			Total books of: {books.length}
			<BookCreate handleCreateBook={handleCreateBook} />
		</div>
	);
}

export default App;
