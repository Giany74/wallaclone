export const buildTweet = (tweet) => {
  return `
  <a href="./detail.html?id=${tweet.id}">  
  <p>${tweet.photo}</p>
  <p>${tweet.price}</p>
  <p>${tweet.name}</p>
  <p>${tweet.message}</p>
  <p>${tweet.buySell}</p>
  </a>

`;
}

export const emptyTweets = () => {
  return `<h3>No hay tweets disponibles, disculpa las molestias.</h3>`
}

/**
 *  list items
 *  <span>${tweet.handler}</span>
 *  <span>${tweet.date}</span>
 *  <p>${tweet.message}</p>
 *  <p>${tweet.buySell}</p>
 * 
 *  */