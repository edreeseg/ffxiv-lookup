exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        { id: 1, username: 'frodo', password: 'ring1' },
        { id: 2, username: 'gandalf', password: 'mithrandir' },
        { id: 3, username: 'aragorn', password: 'evenstar' },
      ]);
    });
};
