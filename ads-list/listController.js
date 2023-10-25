import { getTweets } from "./listModel.js";
import { buildTweet, emptyTweets } from "./listView.js";

export const tweetListController = async (tweetList) => {
  tweetList.innerHTML = '';
  let tweets = [];

  try {
    dispatchEvent('startLoadingTweets', null, tweetList);
    tweets = await getTweets();
  } catch (error) {
    const event = createCustomEvent('error', 'Error cargando Ads')
    tweetList.dispatchEvent(event);
  } finally {
    dispatchEvent('finishLoadingTweets', null, tweetList);
  }

  if (tweets.length === 0) {
    tweetList.innerHTML = emptyTweets();
  } else {
    renderTweets(tweets, tweetList);

    const event = createCustomEvent('success', 'Ads loaded');
    tweetList.dispatchEvent(event);
  }
  
}

const renderTweets = (tweets, tweetList) => {
  tweets.forEach(tweet => {
    const tweetContainer = document.createElement('div');
    tweetContainer.classList.add('tweet');
    
    tweetContainer.innerHTML = buildTweet(tweet);

    tweetList.appendChild(tweetContainer)
  })
}

const createCustomEvent = (type, message) => {
  const event = new CustomEvent("tweetsLoaded", {
    detail: {
      type: type,
      message: message
    }
  });

  return event;
}

const dispatchEvent = (eventName, data, element) => {
  const event = new CustomEvent(eventName, {
    detail: data
  });

  element.dispatchEvent(event);
}
