export const buildAds = (ads) => {
  return `
  <a href="./detail.html?id=${ads.id}">  
  <div id="img">
  <img src="${ads.image}" alt="${ads.name}">
  </div>
  <br>
  <p id="price">${ads.price} €</p>
  <p id="name">${ads.name}</p>
  <p id="message">${ads.message}</p>
  <p id="buySell">${ads.buySell}</p>
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