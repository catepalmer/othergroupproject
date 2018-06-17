
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('answers').del()
    .then(function () {
      // Inserts seed entries
      return knex('answers').insert([
        {question_id: 1, answer_id: 'rowValue1', answer: 'dgd', name: 'sdfsf'},
        {question_id: 2, answer_id: 'rowValue2', answer: 'dgd', name: 'sdfsf'},
        {question_id: 3, answer_id: 'rowValue3', answer: 'dgd', name: 'sdfsf'}
      ]);
    });
};
