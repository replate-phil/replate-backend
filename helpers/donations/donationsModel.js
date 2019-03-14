const db = require('../../data/dbConfig');

module.exports = {
	add,
	find,
	findBy,
	findById,
};

function find() {
	return db('donations').select('id', 'name');
}

function findBy(filter) {
	return db('donations').where(filter);
}

async function add(donations) {
	const [id] = await db('donations').insert(donations);

	return findById(id);
}

function findById(id) {
	return db('donations')
		.where({ id })
		.first();
}
