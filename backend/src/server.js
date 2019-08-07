const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const server = express();


mongoose.connect('mongodb+srv://omni:omni5094@omnistack-y62p6.mongodb.net/omnistack?retryWrites=true&w=majority', {
    useNewUrlParser : true
});

server.use(express.json());
server.use(routes);


server.listen(3333);