const fs = require('fs');
const path = require('path');
const internal = {}
exports = module.exports = internal;

/*
 * Modified by Diego Perez
 * Get file depends of groupFilter. If groupFilter not set, by default search in group1 file.
 */
internal.LoadFromLocal = function (groupFilter) {
        var group = '1';
        
        if(typeof groupFilter !== 'undefined'){
            group = groupFilter;
        }
        
        const absoultePaht = path.resolve(__dirname, '../')
        const data = fs.readFileSync(`${absoultePaht}/data/grupo${group}/datos.yaml`, 'utf8');
        return data
}