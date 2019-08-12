const article = require('./article.json')
const tag  = require('./tag.json')
const comment = require('./comment.json')
const login = require('./login.json')
const test  = require('./test.json')
 
module.exports = {
  port: 8080,
  before (app) {
    //article
    app.get('/api/article', (req, res) => {
      res.json(article)
    })
    //tag
    app.get('/api/tag', (req, res) => {
      res.json(tag)
    })
    //comment
    app.get('/api/comment', (req, res) => {
      res.json(comment)
    })
    //login
    app.get('/api/login', (req, res) => {
      res.json(login)
    })
    //test
    app.get('/api/test', (req, res) => {
      res.json(test)
    })
   
  }
}