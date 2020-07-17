const router = require('express').Router()
const User = require('../db/models/user')
const {receivePublicToken} = require('../controllers/controller')
module.exports = router

router.post('/login', async (req, res, next) => {
  try {
    const user = await User.findOne({where: {email: req.body.email}})
    if (!user) {
      res.status(401).send('Wrong username and/or password')
    } else if (!user.correctPassword(req.body.password)) {
      res.status(401).send('Wrong username and/or password')
    } else {
      req.login(user, err => (err ? next(err) : res.json(user)))
    }
  } catch (err) {
    next(err)
  }
})

router.post('/public_token', async (req, res, next) => {
  try {
    await receivePublicToken(req.body.public_token, req.user.id)
  } catch (error) {
    next(error)
  }
})

router.post('/signup', async (req, res, next) => {
  try {
    if (!req.body.password || !req.body.email) {
      res.status(400).send('Password and email required')
    } else {
      const user = await User.create({
        email: req.body.email,
        password: req.body.password
      })
      req.login(user, err => (err ? next(err) : res.json(user)))
    }
  } catch (err) {
    if (err.name === 'SequelizeUniqueConstraintError') {
      res.status(401).send('User already exists')
    } else {
      next(err)
    }
  }
})

router.post('/logout', (req, res) => {
  req.logout()
  req.session.destroy()
  res.redirect('/')
})

router.get('/me', (req, res) => {
  res.json(req.user)
})

router.use('/google', require('./google'))
