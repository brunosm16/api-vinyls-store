const dotenv = require('dotenv');
const app = require('./src/app');
const connectDB = require('./src/setup/connectDB');

dotenv.config({ path: './.env' });

const PORT = process.env.PORT || 8000;
const { DB_CONNECTION, DB_PASSWORD } = process.env;

connectDB(DB_CONNECTION, DB_PASSWORD);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on port ${PORT}`);
});
