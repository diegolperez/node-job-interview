const internal = {}
exports = module.exports = internal;

/*
 * Utils functions
 * Author: Diego Perez 
 */

/*
 * Function to delete spaces and lowercase in strings 
 */
internal.DeleteStringSpaces = function (stringWorlds) {
  
    var stringWithouthSpaces = ((stringWorlds.replace(/ /g, "")).trim()).toLowerCase();
  
    return stringWithouthSpaces;
}

/*
 * Function to compare regular expression with a string
 */
internal.compareRegExp = function (RegularExpression, StringCompare) {
    
    //First validate allowedEmails RegularExpression 
    var RegularExpressionValidate = this.validateRegExp(RegularExpression)
    console.log(RegularExpressionValidate);
    let re = new RegExp('/'+(this.DeleteStringSpaces(RegularExpressionValidate)));
    
    if(re.test(this.DeleteStringSpaces(StringCompare)) || this.DeleteStringSpaces(StringCompare) === this.DeleteStringSpaces(RegularExpressionValidate)){
        return true;

    }
    
    return false;
} 

/*
 * Function to validate regularExpression in allowedEmails
 */
internal.validateRegExp = function (RegularExpression) {
    
    let re = new RegExp(/^\w+([\.-]?\w+)+\*\w+([\.:]?\w+)+(\.[a-zA-Z0-9]{2,3})+$/,'i');
    if(re.test(RegularExpression)){
        return (RegularExpression).replace('*','@');
    }
   
    return RegularExpression;
}

