import { deleteAds, getAds } from "./detailModel.js"
import { buildAds } from "./detailView.js";
import { dispatchEvent } from "../utils/dispatchEvent.js";
import { decodeToken } from "../utils/decodeToken.js";

export const tweetDetailController = async (tweetDetail, tweetId) => {

  try {
    const tweet = await getAds(tweetId);
    tweetDetail.innerHTML = buildAds(tweet);
    handleDeleteTweet(tweet, tweetDetail);
  } catch (error) {
    dispatchEvent('tweetLoaded', { type: "error", message: "El Ads no existe" }, tweetDetail);
    setTimeout(() => {
      window.location = './index.html';
    }, 3000);
  }
  
}

const handleDeleteTweet = (tweet, tweetDetail) => {
  const token = localStorage.getItem('token');

  if (token) {
    const { userId } = decodeToken(token);

    if (userId === tweet.userId) {
      addDeleteTweetButton(tweet, tweetDetail);
    }
  }
}

const addDeleteTweetButton = (tweet, tweetDetail) => {
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete Ads';
  deleteButton.addEventListener('click', async () => {
    if (confirm('Surely you want to delete Ads?')) {
      await deleteAds(tweet.id);
      window.location = 'index.html';
    }
  })

  tweetDetail.appendChild(deleteButton);
}
