const axios = require('axios');

const listRepositories = async (req, res) => {
  await axios
    .get(`https://api.github.com/user/repos`, {
      headers: {
        Authorization: `${req.headers.authorization}`,
      },
    })
    .then((result) => {
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 10;
      const data = result.data;
      const offset = limit * (page - 1);
      const totalPages = Math.ceil(data.length / limit);
      const paginatedItems = data.slice(offset, limit * page);

      return res.status(200).json({
        data: paginatedItems,
        total: data.length,
        previousPage: page - 1 ? page - 1 : null,
        nextPage: totalPages > page ? page + 1 : null,
        totalPages: totalPages,
      });
    })
    .catch((err) => {
      console.log(err);
      return res.status(401).json({
        message: 'unauthorized',
      });
    });
};

module.exports = { listRepositories };
