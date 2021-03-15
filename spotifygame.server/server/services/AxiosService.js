export const api = axios.create({
  baseURL: 'https://api.spotify.com/v1',
  dataType : 'json',
  headers: {
    'Content-Type': 'application/json'
  }
})