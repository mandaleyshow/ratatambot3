const express = require('express');
const bodyParser = require('body-parser');

const app = express();

var url = require('url')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('*', (request, response) => {
	response.sendFile(path.join(__dirname, 'client/build', 'index.js'));
});

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
}

app.listen(process.env.PORT || 3000, () => console.log('Webhook server is listening, port 3000'));

