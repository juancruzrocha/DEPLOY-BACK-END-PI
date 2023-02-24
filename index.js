
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
// const {
//   SERVER_PORT
// } = process.env;

const SERVER_PORT = process.env.SERVER_PORT || 3001;

// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  server.listen(SERVER_PORT , () => {
    console.log(`Listening at ${SERVER_PORT}`) // eslint-disable-line no-console
  });
} );
