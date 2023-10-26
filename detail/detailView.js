export const buildAds = (ads) => {
  let adsTemplate = `
  <span>${ads.handler}</span>
  <br>
  <img src="${ads.image}" alt="${ads.name}">
  <br>
  <p>${ads.price} €</p>
  <p>${ads.name}</p>
  <p>${ads.message}</p>
  <p>${ads.buySell}</p>
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