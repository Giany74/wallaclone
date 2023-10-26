import { deleteAds, getAds } from "./detailModel.js"
import { buildAds } from "./detailView.js";
import { dispatchEvent } from "../utils/dispatchEvent.js";
import { decodeToken } from "../utils/decodeToken.js";

export const adsDetailController = async (adsDetail, adsId) => {

  try {
    const ads = await getAds(adsId);
    adsDetail.innerHTML = buildAds(ads);
    handleDeleteAds(ads, adsDetail);
  } catch (error) {
    dispatchEvent('adsLoaded', { type: "error", message: "El Ads no existe" }, adsDetail);
    setTimeout(() => {
      window.location = './index.html';
    }, 3000);
  }
  
}

const handleDeleteAds = (ads, adsDetail) => {
  const token = localStorage.getItem('token');

  if (token) {
    const { userId } = decodeToken(token);

    if (userId === ads.userId) {
      addDeleteAdsButton(ads, adsDetail);
    }
  }
}

const addDeleteAdsButton = (ads, adsDetail) => {
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete Ads';
  deleteButton.addEventListener('click', async () => {
    if (confirm('Surely you want to delete Ads?')) {
      await deleteAds(ads.id);
      window.location = 'index.html';
    }
  })

  adsDetail.appendChild(deleteButton);
}
