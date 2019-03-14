const express = require('express');

const configureMiddleware = require('../middleware/middleware');
const authRouter = require('../middleware/auth/authRouter');

const businessRouter = require('../helpers/business/businessRouter');
const donationsRouter = require('../helpers/donations/donationsRouter');
const volunteerRouter = require('../helpers/volunteers/volunteerRouter');
const foodbankRouter = require('../helpers/foodbank/foodbankRouter');

const server = express();

configureMiddleware(server);

server.use('/api/auth', authRouter);
server.use('/api/business', businessRouter);
server.use('/api/donations', donationsRouter);
server.use('/api/foodbank', foodbankRouter);
server.use('/api/volunteers', volunteerRouter);

server.get('/', async (req, res) => {
	res.status(200).json({ api: 'running' });
});

module.exports = server;
