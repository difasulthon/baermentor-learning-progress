import { Hono } from 'hono'
import { Mentor, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = new Hono()

app.onError((err, c) => {
  return c.text('error custom testing', 500)
})

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

// Get Mentors

type Options<T> = {
  select?: T;
  // where?: T;
}

type MentorFields = {
  name?: boolean;
  username?: boolean
}
app.get('/mentors', async (c) => {
  const fields = c.req.queries('fields')
  let options: Options<Partial<MentorFields>> = {}

  if (fields) {
    const fieldResult: Partial<MentorFields> = Object.fromEntries(fields?.map(f => [f, true]))
    options.select = {...fieldResult}
  }

  const mentors = await prisma.mentor.findMany(Object.keys(options).length > 0 ? options : undefined)

  return c.json({
    status: true,
    message: 'Successfully get mentors',
    data: mentors
  }, 200)
})

// Add Mentors
app.post('/mentors' , async (c) => {
  const {name, username} = await c.req.json()
  const newMentor = await prisma.mentor.create({
    data: {
      name,
      username
    }
  })

  return c.json({
    status: true,
    message: 'Successfully adding mentor',
    data: newMentor
  }, 201)
})

// Update mentor username
app.patch('/mentor/:username', async (c) => {
  console.log('patch')
  const username = c.req.param('username')
  const {name} = await c.req.json()

  const updatedMentor = await prisma.mentor.update({
    where: {
      username
    },
    data: {
      name
    }
  })

  return c.json({
    status: true,
    message: `Successfully update mentor username: ${username}`,
    data: updatedMentor
  })
})

app.delete('/mentor/:id', async (c) => {
  const mentor_id = c.req.param('id')

  const deletedMentor = await prisma.mentor.delete({
    where: {
      id: +mentor_id
    }
  })

  return c.json({
    status: true,
    message: `Successfully deleted mentor id: ${mentor_id}`,
    data: deletedMentor
  })
})


export default {
  port: 3001,
  fetch: app.fetch
}
