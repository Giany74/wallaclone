export const buildTweet = (tweet) => {
  return `
  <a href="./detail.html?id=${tweet.id}">
    <span>${tweet.photo}</span>
    <br>
    <span>${tweet.price}</span>
    <br>
    <p>${tweet.name}</p>
  </a>

`;
}

export const emptyTweets = () => {
  return `<h3>No hay tweets disponibles, disculpa las molestias.</h3>`
}
