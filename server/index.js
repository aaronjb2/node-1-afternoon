const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../public/build'));

const port = 3001;

const controller = require('./controllers/messages_controller');
const messagesBaseUrl = "/api/messages";

app.post(messagesBaseUrl, controller.create);

app.get(messagesBaseUrl, controller.read);

app.put(`${messagesBaseUrl}/:id`, controller.update);

app.delete(`${messagesBaseUrl}/:id`, controller.delete);

app.listen(port, () => {
    console.log('Lift off done not messed up. The port number is ', port)
});
