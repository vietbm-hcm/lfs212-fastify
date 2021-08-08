'use strict'

module.exports = async (fastify, opts) => {
  fastify.get('/', async (req, res) => {
    return res.view('index.hbs')
  })
}