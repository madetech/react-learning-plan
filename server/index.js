const express = require('express')
const faker = require('faker')

const server = express()

const randomPost = () => ({
  title: faker.random.words(),
  creator: faker.internet.userName(),
  points: faker.random.number()
})

const randomPostsArray = () => {
  const length = Math.floor(Math.random() * 50)
  const array = Array.apply(null, Array(length))

  return array.map(randomPost)
}

server.get('/api/posts', function (req, res) {
  res.json({
    posts: randomPostsArray()
  })
})

server.listen(3000, () =>
  console.log('Server listening on http://localhost:3000')
)
