const assert = require('assert')
const fetchProject = require('../figmafetch')
const figmaToken= '46436-c6600cfa-6adf-4031-9e2a-ba1449a6dd6c',
  fileId = 'SGzkSxkP3pnZQrh9pzn6mf'

const tests = {
  getFile: async () => {
    let data = await fetchProject(fileId, figmaToken);
    try {
      assert.equal(data.document.id, '0:0', 'get whole file data')
    }catch(err) { console.error(err) }
  },
  getNodes: async () => {
    let data = await fetchProject(fileId, figmaToken, ['1:3', '1:4']);
    try {
      assert.ok(data.nodes['1:3'], 'get node id 1:3')
      assert.ok(data.nodes['1:4'], 'get node id 1:4')
    }catch(err) { console.error(err) }
  },
  getFileDepth: async () => {
    let data = await fetchProject(fileId, figmaToken, [], 1);
    try {
      assert.equal(data.document.children[0].children.length, 0, 'get file with depth')
    }catch(err) { console.error(err) }
  } 
}

const runTest = async () =>  {
  if(process.argv[2]) 
    tests[process.argv[2]]()
  else 
    Object.keys(tests).forEach((key) => tests[key]())
}

runTest()
