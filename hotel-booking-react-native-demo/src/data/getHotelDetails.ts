import axios from 'axios';

export async function getHotelDetails(key: any) {
  const data = await axios({
    method: 'GET',
    url: `https://api.dev.prrooms.techspian.com/api/hotels/search/result/${key.searchId}?limit=20&offset=1`,
    headers: {
      'search-tracing-key': key.searchTracingKey,
      'Cookie': key.apiKey,
    },
    withCredentials: true,
  });
  return data.data;
}
