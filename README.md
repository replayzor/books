# Book App

A book management app built with React that utilizes the useContext, useCallback, useState, and useEffect hooks. It has four main components - a list view, show view, and edit view for books. The app communicates with a JSON server using the axios library.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js
- npm or yarn

### Installing

1. Clone the repository

git clone https://github.com/replayzor/book-app.git

2. Install dependencies

npm install

or

yarn install


3. Start the development server

npm start

or

yarn start

### Running the JSON Server

This app uses json-server to simulate a REST API for development purposes. To start the JSON server, run the following command in the root directory of the project:

### Dependencies

- React (minimum version 18.2.0)
- axios
- json-server

npm run json-server

or

yarn json-server

By default, the server will run on http://localhost:3000 and use the db.json file in the root directory as the data file. You can also specify a different port or data file by passing in the appropriate options to the command. For example:

json-server --watch db-prod.json --port 3001

This will start the server on http://localhost:3001 and use the db-prod.json file as the data file.

Please be aware that this command assumes that you have json-server installed globally. If you don't, you could either install it globally by doing npm i -g json-server or use npx json-server instead of `json-server`





## Built With

- [React](https://reactjs.org/) - JavaScript library for building user interfaces
- [axios](https://github.com/axios/axios) - Promise based HTTP client for the browser and node.js
- [json-server](https://github.com/typicode/json-server) - Get a full fake REST API with zero coding

## Author

- **Ionut Oltean** - [replayzor](https://github.com/replayzor)
