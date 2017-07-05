const express = require('express')
const faker = require('faker')
const cors = require('cors')

const server = express()

const randomPost = () => ({
  title: faker.random.words(),
  creator: faker.internet.userName(),
  host: faker.internet.domainName(),
  points: faker.random.number()
})

const randomPostsArray = () => {
  const length = Math.floor(Math.random() * 50)
  const array = Array.apply(null, Array(length))

  return array.map(randomPost)
}

server.use(cors())

server.get('/api/posts', function (req, res) {
  res.json({
    posts: randomPostsArray()
  })
})

const randomComment = (depth) => ({
  creator: faker.internet.userName(),
  comment: faker.lorem.paragraph(),
  replies: randomCommentsArray(depth + 1)
})

const randomCommentsArray = (depth) => {
  const length = Math.floor(Math.random() * 10 / depth);
  const array = Array(length).fill(depth);
  return array.map(randomComment);
}

server.get('/api/comments/:postId', function(req, res) {
  res.json({
    comments: randomCommentsArray(1)
  })
})

server.listen(3000, () =>
  console.log('Server listening on http://localhost:3000')
)
