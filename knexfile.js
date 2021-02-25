// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      user : 'postgres',
      password : 'admin',
      database : 'agroapp'
    },
    production: {
      client: 'pg',
    connection: {
      host : 'ec2-3-209-176-42.compute-1.amazonaws.com
      ',
      user : 'bsmrjohmufeusc',
      password : '9620bd8d41c92a54af742787fa9be380334e19f62b4ca5b463a5125a40ef6e8e
      ',
      database : process.env.DATABASE_URL
},
},
}};
