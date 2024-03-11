export function getPicture(value) {
  const BASE_URL = 'https://pixabay.com';
  const END_POINT = '/api/';
  const KEY = '42750923-b31641a9e28119200a05c3b82';
  
  const params = new URLSearchParams({
    key: KEY,
    q: value,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 21,
  });

  return fetch(`${BASE_URL}${END_POINT}?${params}`).then(res => {
    if (!res.ok) {
      throw new Error(res.status);
    }
    return res.json();
  });
}
