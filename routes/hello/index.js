'use strict'
module.exports = async (fastify, opts) => {
  fastify.get('/', async (req, res) => {
    const { greeting = 'hello'} = req.query
    return res.view(`hello.hbs`, { greeting })
  })
}