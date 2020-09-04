const internal = {};
exports = module.exports = internal;

  /*
   * Function to filter by Auth Email and Service Filter Name if exist
   * Author: Diego Perez 
   */
var utils = require('./utils');

internal.ByEmailAndService = function (dataJSON, emailAuth, serviceFilter) {
    
    //Declare auxiliar variables for build the JSON object with filters
    var dataJSONAux = [];
    var dataJSONReturn = {};
    
    //Iterate the JSON object
    dataJSON.forEach(function(service,index_service) {
        var ServiceAux = [];
        var ServiceKind = service.kind;
        service.spec.forEach(function(data, index_data) {
            var count_ocurrences = 0;
            data.allowedEmails.forEach(function(emailRegExp){
                //Validate if email Auth match with email regular expression 
                if(utils.compareRegExp(emailRegExp, emailAuth)){
                    //If match, count ocurrences of list
                    count_ocurrences += 1;
                }
            });
            if(count_ocurrences > 0){
                //If exist ocurrences with regular expressions delete only AllowedEmails property and set this service in aux array
                if(dataJSON[index_service].spec[index_data] !== ''){
                  delete(dataJSON[index_service].spec[index_data].allowedEmails);
                  ServiceAux.push(dataJSON[index_service].spec[index_data]);                  
                }
            }
      });

      if(ServiceAux.length > 0){
          //Only set the services with coincidences with regular expresions and service kind filters
          if(typeof serviceFilter !== 'undefined'){
                //If serviceFilter exist compare serviceFilter with ServiceKind
                if(utils.DeleteStringSpaces(serviceFilter) === utils.DeleteStringSpaces(ServiceKind)){
                    dataJSONReturn = {'kind': ServiceKind, 'spec':ServiceAux};   
                    dataJSONAux.push(dataJSONReturn);   
                }                
          }else{
              //Return JSON only with email filter
              dataJSONReturn = {'kind': ServiceKind, 'spec':ServiceAux};   
              dataJSONAux.push(dataJSONReturn);                
          }
      }       
    });

    return dataJSONAux;
}