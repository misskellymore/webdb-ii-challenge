const knex = require('knex');
const knexConfig = require('../knexfile.js');


const cars = knex(knexConfig.development);


module.exports = cars;