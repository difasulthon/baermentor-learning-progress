import { Hono } from 'hono'
import { addUser, deleteUserById, getUserById, getUsers, updateEmailById } from './users'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

// Users
// Get Users
app.get('/users', (c) => {
  const users = getUsers()
  return c.json(users, 200)
})

// Get User By Id
app.get('/users/:id', (c) => {
  const id = c.req.param('id')
  const user = getUserById(+id)

  return c.json(user, 200)
})

// Add User
app.post('/users', async (c) => {
  let body: {name: string, email: string}
  const contentType = c.req.header('Content-Type')

  if (contentType === 'application/json') {
    body = await c.req.json()
  } else {
    body = await c.req.parseBody<{
      name: string;
      email: string
    }>()
  }

  const {name, email} = body
  const newUser = addUser({name, email})

  return c.json(newUser, 201)
})

// Delete User
app.delete('/users/:id', (c) => {
  const {id} = c.req.param()
  const deletedUser = deleteUserById(+id)

  return c.text(deletedUser)
})

app.patch('/users/:id', async (c) => {
  const id = c.req.param('id')
  let body: {email: string}
  const contentType = c.req.header('Content-Type')

  if (contentType === 'application/json') {
    body = await c.req.json()
  } else {
    body = await c.req.parseBody<{
      email: string
    }>()
  }

  const {email} = body
  const updatedUser = updateEmailById({id: +id, email})

  return c.json(updatedUser)
})

export default app
