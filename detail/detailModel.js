const parseAds = (ads) => {
  return {
    handler: ads.user.username,
    message: ads.message,
    name: ads.name,
    price: ads.price,
    buySell: ads.buySell,
    image: ads.image,
    userId: ads.user.id,
    id: ads.id
  }
}

export const getAds = async (adsId) => {
  const url = `http://localhost:8000/api/ads/${adsId}?_expand=user`;
  let ads;

  try {
    const response = await fetch(url);
    if (response.ok) {
      ads = await response.json();
    } else {
      throw new Error('El ads no existe');
    }
  } catch (error) {
    throw error.message;
  }

  return parseAds(ads);
}

export const deleteAds = async (adsId) => {
  const url = `http://localhost:8000/api/ads/${adsId}`;
  const token = localStorage.getItem('token');

  let response;
  try {
    response = await fetch(url, {
      method: "DELETE",
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });
    
    if (!response.ok) {
      const data = await response.json()
      throw new Error(data.message);
    }
  } catch (error) {
    if (error.message) {
      throw error.message;
    } else {
      throw error;
    }
  }
}
