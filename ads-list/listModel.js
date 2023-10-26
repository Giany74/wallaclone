const transformTweets = (tweets) => {
  return tweets.map(tweet => ({
    handler: tweet.user.username,
    date: new Date().toISOString(),
    message: tweet.message,
    name: tweet.name,
    price: tweet.price,
    buySell: tweet.buySell,
    photo: tweet.photo,
    id: tweet.id
  }))
}

export const getTweets = async () => {
  const url = "http://localhost:8000/api/tweets?_expand=user";
  let parsedTweets = [];

  try {
    const response = await fetch(url);
    const tweets = await response.json();
    parsedTweets = transformTweets(tweets)
    
  } catch (error) {
    throw error;
  }
  
  return parsedTweets;
}
