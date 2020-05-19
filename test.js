const fetchProject = require('./figmafetch')
let fileId = 'YZkG7swHVcXXJ6gA5PfLuNzw'
let token = '12606-e447b778-09cc-4bd3-91e8-843146de402d';
let nodeIds = ['6:36'];
let fs = require('fs');

(async () => {
  let data = await fetchProject(fileId, token, nodeIds);
    data = data;
    data['headers'] = { token: token, id: fileId };
  fs.writeFileSync('./test-result', JSON.stringify(data, null, 2))
})()

