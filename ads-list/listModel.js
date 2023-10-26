const transformAdss = (adss) => {
  return adss.map(ads => ({
    handler: ads.user.username,
    date: new Date().toISOString(),
    message: ads.message,
    name: ads.name,
    price: ads.price,
    buySell: ads.buySell,
    image: ads.image,
    id: ads.id
  }))
}

export const getAdss = async () => {
  const url = "http://localhost:8000/api/ads?_expand=user";
  let parsedAdss = [];

  try {
    const response = await fetch(url);
    const adss = await response.json();
    parsedAdss = transformAdss(adss)
    
  } catch (error) {
    throw error;
  }
  
  return parsedAdss;
}
