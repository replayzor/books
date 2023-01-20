import { useState } from "react";
import BookCreate from "./components/BookCreate";

function App() {
	const [books, setBooks] = useState([]);

	const handleCreateBook = (title) => {
		console.log("The title is:", title);
	};

	return (
		<div>
			<BookCreate handleCreateBook={handleCreateBook} />
		</div>
	);
}

export default App;
