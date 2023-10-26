export const buildAds = (tweet) => {
  let tweetTemplate = `
  <span>${tweet.handler}</span>
  <p>${tweet.photo}</p>
  <p>${tweet.price}</p>
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