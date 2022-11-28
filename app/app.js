const axios = require('axios');
const express = require('express');
const app = express();
const repositoriesRoute = require('./routes/repository');
const auth = require('./routes/auth');

// const clientId = 'a5a0180cfb2817b28a65';
// const clientSecret = 'b3954a476f38e96c54afe826c8af01756987df68';

app.use(express.json());
app.use('/api', auth);
app.use('/api', repositoriesRoute);

app.listen(3000, () => {
  console.log('Running on port 3000...');
});
