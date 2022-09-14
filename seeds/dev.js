/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {id: 1, name: 'Name 1', age: 21},
    {id: 2, name: 'Name 2', age: 22},
    {id: 3, name: 'Name 3', age: 23}
  ]);

  await knex('todos').del()
  await knex('todos').insert([
    {user_id: 1, todo: 'todo 1'},
    {user_id: 1, todo: 'todo 2'},
    {user_id: 2, todo: 'todo 1'},
    {user_id: 2, todo: 'todo 2'},
    {user_id: 2, todo: 'todo 3'},
    {user_id: 3, todo: 'todo 1'},
    {user_id: 3, todo: 'todo 2'}
  ]);

};
