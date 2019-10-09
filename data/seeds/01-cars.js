
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {vin: '12345', make: 'Tesla', model: 'S3', mileage: '1000'},
        {vin: '6789', make: 'Smart', model: 'Passion', mileage: '19000'},
        {vin: '1011', make: 'Toyota', model: 'Corolla', mileage: '17000'}
        
      ]);
    });
};
