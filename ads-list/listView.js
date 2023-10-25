export const buildTweet = (tweet) => {
  return `
  <a href="./detail.html?id=${tweet.id}">
    <span>${tweet.handler}</span>
    <span>${tweet.date}</span>
    <p>${tweet.message}</p>
  </a>

`;
}

export const emptyTweets = () => {
  return `<h3>No hay tweets disponibles, disculpa las molestias.</h3>`
}
