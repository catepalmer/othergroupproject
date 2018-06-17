
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('profiles').del()
    .then(function () {
      // Inserts seed entries
      return knex('profiles').insert([
        {id: 1, name: 'rowValue1', description: 'fsdf', image: 'fsdf'},
        {id: 2, name: 'rowValue2', description: 'fsdf', image: 'fsdf'},
        {id: 3, name: 'rowValue3', description: 'fsdf', image: 'fsdf'}
      ]);
    });
};
