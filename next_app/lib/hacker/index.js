import fetch from 'isomorphic-unfetch'

const hacker = {}

hacker.topstories = () =>
  fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
    .then(response => response.json())
    .then(json => json.slice(20, 30))
    .then(json => (Promise.all(json.map(hacker.item))))

hacker.item = async id => {
  const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
  const json = await response.json()
  const kids = await Promise.all(json.kids.map(hacker.item))

  return {
    id: json.id,
    by: json.by,
    score: json.score,
    title: json.title,
    url: json.url,
    text: json.text,
    descendants: json.descendants,
    kids: kids
  }
}

export default hacker
