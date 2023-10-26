export const buildAds = (ads) => {
  return `
  <a href="./detail.html?id=${ads.id}">  
  <img src="${ads.image}" alt="${ads.name}">
  <br>
  <p>${ads.price} €</p>
  <p>${ads.name}</p>
  <p>${ads.message}</p>
  <p>${ads.buySell}</p>
  </a>

`;
}

export const emptyAdss = () => {
  return `<h3>No Ads available, sorry!</h3>`
}

/**
 *  list items
 *  <span>${ads.handler}</span>
 *  <span>${ads.date}</span>
 *  <p>${ads.message}</p>
 *  <p>${ads.buySell}</p>
 * 
 *  */