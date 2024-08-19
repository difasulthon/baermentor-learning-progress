const express = require('express')
const app = express()
const port = 3000

function setUser(req, res, next) {
  console.log('hai')
  req.userInfo = {
    username: 'Difa',
    email: 'difa@email.com'
  }
  next()
}

// middleware
// app.use(setUser)

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.get('/', setUser,  (req, res) => {
  console.log('req', req.userInfo)
  res.send('<h1>Hello World!</h1>')
})

// app.get('/users', (req, res) => {
//   console.log('req', req.userInfo)
//   res.send('<h1>Ini adalah endpoint users</h1>')
// })

app.get('/users', (req, res) => {
  res.status(200).json([
    {
      username: 'Difa',
      email: 'difa@email.com'
    },
    {
      username: 'Dinda',
      email: 'dinda@email.com'
    }
  ])
})

app.post('/users', (req, res) => {
  console.log('req.body', req.body)
  const {username, email} = req.body
  res.status(201).json({
    username, email
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})