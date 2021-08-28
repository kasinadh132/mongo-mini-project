const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const bearController = require('./bears/bearController');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.get('/', function(req, res) {
    res.status(200).json({ api: 'running' });
});

server.use('/api/bears', bearController);

const port = process.env.PORT || 5000;
server.listen(port, () => {
    console.log(`\n=== API running on http://localhost:${port} ===\n`);
});