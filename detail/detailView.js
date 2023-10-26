export const buildAds = (tweet) => {
  let tweetTemplate = `
  <span>${tweet.handler}</span>
  <br>
  <img src="${tweet.image}" alt="${tweet.name}">
  <br>
  <p>${tweet.price} €</p>
  <p>${tweet.name}</p>
  <p>${tweet.message}</p>
  <p>${tweet.buySell}</p>
  `;

  return tweetTemplate;
}


/**
 *  list items
 *  <span>${tweet.handler}</span>
 *  <span>${tweet.date}</span>
 *  <p>${tweet.message}</p>
 *  <p>${tweet.buySell}</p>
 * 
 *  */