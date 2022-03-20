const express = require('express');

const { port, site } = require('./config');

// routes
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const roleRoutes = require('./routes/role');

const rootUrl = `http://localhost:${port}`;

const app = express();

app.set('view engine', 'ejs');

app.get('/', (_, res) => {
  res.render('index', { site });
});

app.use(express.json());

app.use('/auth', authRoutes);
app.use('/user', userRoutes);
app.use('/role', roleRoutes);

app.listen(port, (err) => {
  if (err) {
    throw err;
  }
  process.env.CONFIG === 'dev' && console.log(`> Ready on ${rootUrl}`);
});
