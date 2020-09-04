//external dependencies
const express = require('express');
const basicAuth = require('express-basic-auth')

//local dependencies
const file = require('./lib/file');
const converter = require('./lib/converter');
const filter = require('./lib/filter');
const utils = require('./lib/utils');

//configuration
const app = express();
const port = 3000

//basic auth
app.use(basicAuth({
  users: {
    'usuarioA@gmail.com': '1234567890',
    'usuarioB@gmail.com': '1234567890',
    'usuarioC@gmail.com': '1234567890',
    'usuarioA@hotmail.com': '1234567890',
    'usuarioB@hotmail.com': '1234567890',
    'usuarioB@yahoo.com': '1234567890',
    'usuarioB@live.com': '1234567890',
    'usuarioC@ppm.com.ec': '1234567890',
  },
  unauthorizedResponse: (req) => {
    return req.auth ? 'unauthorized' : 'empty credentials'
  }
}))

app.get('/', (req, res) => {
    res.send("ok")
})

app.get('/data', (req, res) => {
    
 
    /*
     * Filters by Email, Group and Service
     * Author: Diego Perez 
     */

    /* 
     * Get email of Auth Headers, groupFilter and serviceFilter from GET URL
     * Example of GET web service URL valid filters:
     * http://localhost:3000/data
     * http://localhost:3000/data?groupFilter=1
     * http://localhost:3000/data?groupFilter=1&serviceFilter=servicioA
     * http://localhost:3000/data?serviceFilter=servicioA
     */
    
    var emailAuth = req.auth.user;
    var groupFilter = req.query.groupFilter;
    var serviceFilter = req.query.serviceFilter;

    //Get file depends of groupFilter. If groupFilter not set, by default search in group1 file.
    const data = file.LoadFromLocal(groupFilter);
    const dataJSON = converter.FromYaml2JSON(data);

    
    var dataJSONAux = [];
    if(typeof serviceFilter !== 'undefined'){
        //If serviceFilter is specified and set, filter for serviceName too
        dataJSONAux = filter.ByEmailAndService(dataJSON, emailAuth, serviceFilter);
    }else{  
        dataJSONAux = filter.ByEmailAndService(dataJSON, emailAuth);
    } 
    res.json(dataJSONAux);
   
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
