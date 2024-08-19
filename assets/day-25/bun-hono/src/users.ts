interface User {
  id: number,
  name: string,
  email: string
}

export let initialUser: User[] = [
  {
    id: 1,
    name: 'Difa',
    email: 'difa@email.com'
  },
  {
    id: 2,
    name: 'Dinda',
    email: 'dinda@email.com'
  },
  {
    id: 3,
    name: 'Ben',
    email: 'ben@email.com'
  }
]

export function getUsers() {
  return initialUser
}

export function getUserById(id: number) {
  const user = initialUser.find(item => item.id === id)

  return user
}

export function addUser({name, email}: {name: string, email: string}) {
  const newId = initialUser.length === 0 ? 1 : initialUser[initialUser.length - 1].id + 1

  const newUser = {
    id: newId,
    name,
    email
  }

  initialUser.push(newUser)

  return newUser
}

export function deleteUserById(id: number) {
  const users = initialUser.filter(item => item.id !== id)
  initialUser = users

  return `User with id: ${id} has deleted`
}

export function updateEmailById({id, email}: {id: number, email: string}) {
  const users = getUsers()
  const foundUser = users.find((item: User) => item.id === id)

  foundUser.email = email

  return foundUser
}