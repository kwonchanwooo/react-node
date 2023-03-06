const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const app = express();
const port = 5500;

app.use(express.static(path.join(__dirname, '../client/build')));

app.listen(port, () => {
	mongoose
		.connect(
			'mongodb+srv://ppoppo121:!abcd1234@cluster0.6owurfr.mongodb.net/?retryWrites=true&w=majority'
		)
		.then(() => console.log(`Server app listening on port ${port} with MongoDB`))
		.catch((err) => console.log(err));
});

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '../client/build/index.html'));
});
