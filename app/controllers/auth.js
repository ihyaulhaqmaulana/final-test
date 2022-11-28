const axios = require('axios');
require('dotenv').config();

const auth = (req, res) => {
  res.redirect(
    `https://github.com/login/oauth/authorize?client_id=${process.env.CLIENT_ID}`
  );
};

const authCallback = async (req, res) => {
  axios
    .post(
      'https://github.com/login/oauth/access_token',
      {
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
        code: req.query.code,
      },
      {
        headers: {
          Accept: 'application/json',
        },
      }
    )
    .then((result) => {
      return res.status(200).json({
        message: 'Success',
        data: result.data,
      });
    })
    .catch((err) => {
      return res.status(500).json({
        message: 'Internal server error',
      });
    });
};

module.exports = { auth, authCallback };
