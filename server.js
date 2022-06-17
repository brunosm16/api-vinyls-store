const dotenv = require('dotenv');
const app = require('./src/app');

dotenv.config({ path: './.env' });

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on port ${PORT}`);
});
