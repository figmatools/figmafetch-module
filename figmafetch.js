const fetch = require('node-fetch');
const headers = new fetch.Headers();

const baseUrl = 'https://api.figma.com';

module.exports = async function fetchProject(fileId, token, nodeIds = [], depth = false) {
  headers.set('X-Figma-Token', token);
  let url = `${baseUrl}/v1/files/${fileId}`;
  if(nodeIds.length > 0 && nodeIds.length < 15) {
    url +=   `/nodes?ids=${nodeIds.join(',')}`
    if(depth) {
      url += `&depth=${depth}`
    }
  } else {
    if(depth) {
      url += `?depth=${depth}`
    }
  }
  console.log('fetch url: ', url);
  let resp = await fetch(url, 
    {headers});
  let data = await resp.json();
  return data;
}
