const fs = require('fs');
const path = require('path');
const internal = {}
exports = module.exports = internal;

internal.LoadFromLocal = function () {
  const absoultePaht = path.resolve(__dirname, '../')
  const data = fs.readFileSync(`${absoultePaht}/data/grupo1/datos.yaml`, 'utf8');
  return data
}