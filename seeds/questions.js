
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('questions').del()
    .then(function () {
      // Inserts seed entries
      return knex('questions').insert([
        {id: 1, question: 'rowValue1'},
        {id: 2, question: 'rowValue2'},
        {id: 3, question: 'rowValue3'}
      ]);
    });
};
