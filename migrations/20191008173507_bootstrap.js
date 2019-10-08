
exports.up = function(knex) {

    return knex.schema.createTable('cars', table => {
        table.increments();
        table.string('VIN').notNullable().unique();
        table.string('make').notNullable();
        table.string('model').notNullable();
        table.string('mileage').notNullable();
        

    })
  
};

exports.down = function(knex) {

    return knex.dropTableIfExists('cars');
  
};
