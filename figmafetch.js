const fetch = require('node-fetch');
const headers = new fetch.Headers();

const baseUrl = 'https://api.figma.com';

module.exports = async function fetchProject(fileId, token, nodeIds = [], depth) {
  headers.set('X-Figma-Token', token);
  let url = `${baseUrl}/v1/files/${fileId}${nodeIds.length ? 
      `/nodes?ids=${nodeIds.join(',')}` : ''}${depth ? `?depth=${depth}` : ``}`
  let resp = await fetch(url, 
    {headers});
  let data = await resp.json();
  return data;
}
