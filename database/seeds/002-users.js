exports.seed = function (knex) {
  // 000-cleanup.js already cleaned out all tables

  const users = [
    {
      username: "pikachu",
      password: "Pika!",
      role: 1,
    },
    {
      username: "admin",
      password: "abc",
      role: 1,
    },
    {
      username: "cat",
      password: "stuff",
      role: 2,
    },
    {
      username: "noone",
      password: "noone1",
    },
    {
      username: "nobody",
      password: "1",
    },
  ];

  return knex("users").insert(users);
};
