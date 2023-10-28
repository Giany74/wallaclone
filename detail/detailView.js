export const buildAds = (ads) => {
  let adsTemplate = `
  <span>${ads.handler}</span>
  <br>
  <div id="img">
  <img src="${ads.image}" alt="${ads.name}">
  </div>
  <br>
  <p id="price">${ads.price} €</p>
  <p id="name">${ads.name}</p>
  <p id="message">${ads.message}</p>
  <p id="buySell">${ads.buySell}</p>
  `;

  return adsTemplate;
}


/**
 *  list items
 *  <span>${ads.handler}</span>
 *  <span>${ads.date}</span>
 *  <p>${ads.message}</p>
 *  <p>${ads.buySell}</p>
 * 
 *  */