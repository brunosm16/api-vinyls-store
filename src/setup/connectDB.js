const mongoose = require('mongoose');

const connectDB = (conn, password) => {
  // eslint-disable-next-line no-console
  console.log(conn, password);
  const dbConfiguration = conn.replace('<password>', password);

  mongoose
    .connect(dbConfiguration, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    // eslint-disable-next-line no-console
    .then(() => console.log('DB running'))
    // eslint-disable-next-line no-console
    .catch((error) => console.error(error));
};

module.exports = connectDB;
