import { getAdss } from "./listModel.js";
import { buildAds, emptyAdss } from "./listView.js";

export const adsListController = async (adsList) => {
  adsList.innerHTML = '';
  let adss = [];

  try {
    dispatchEvent('startLoadingAdss', null, adsList);
    adss = await getAdss();
  } catch (error) {
    const event = createCustomEvent('error', 'Error cargando Ads')
    adsList.dispatchEvent(event);
  } finally {
    dispatchEvent('finishLoadingAdss', null, adsList);
  }

  if (adss.length === 0) {
    adsList.innerHTML = emptyAdss();
  } else {
    renderAdss(adss, adsList);

    const event = createCustomEvent('success', 'Ads loaded');
    adsList.dispatchEvent(event);
  }
  
}

const renderAdss = (adss, adsList) => {
  adss.forEach(ads => {
    const adsContainer = document.createElement('div');
    adsContainer.classList.add('ads');
    
    adsContainer.innerHTML = buildAds(ads);

    adsList.appendChild(adsContainer)
  })
}

const createCustomEvent = (type, message) => {
  const event = new CustomEvent("adssLoaded", {
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
