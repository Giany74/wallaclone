import { createTweet } from "./creationModel.js";
import { dispatchEvent } from "../utils/dispatchEvent.js";

export const tweetCreationController = (tweetCreation) => {

  tweetCreation.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(tweetCreation);
    const message = formData.get("message");

    try {
      await createTweet(message);
      dispatchEvent('tweetCreated', { type: "success", message: "Ads successfully completed" }, tweetCreation);
      setTimeout(() => {
        window.location = "index.html";
      }, 2000);
    } catch (error) {
      dispatchEvent('tweetCreated', { type: "error", message: "Ads error occurred" }, tweetCreation);      
    }

  })
}
