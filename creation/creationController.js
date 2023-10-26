import { createAds } from "./creationModel.js";
import { dispatchEvent } from "../utils/dispatchEvent.js";

export const adsCreationController = (adsCreation) => {

  adsCreation.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(adsCreation);
    const message = formData.get("message");
    const name = formData.get("name");
    const price = formData.get("price");
    const buySell = formData.get("buySell");
    const image = formData.get("image");

    try {
      await createAds(message, name, price, buySell, image);
      dispatchEvent('adsCreated', { type: "success", message: "Ads successfully completed" }, adsCreation);
      setTimeout(() => {
        window.location = "index.html";
      }, 2000);
    } catch (error) {
      dispatchEvent('adsCreated', { type: "error", message: "Ads error occurred" }, adsCreation);      
    }

  })
}
