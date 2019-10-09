
exports.up = function(knex) {

    return knex.schema.createTable('cars', table => {
        table.increments();
        table.string('vin').notNullable().unique();
        table.string('make').notNullable();
        table.string('model').notNullable();
        table.integer('mileage').notNullable();       
        

    })
  
};

exports.down = function(knex) {

    return knex.schema.dropTableIfExists('cars');
  
};
