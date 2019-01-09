'use strict';

function isValidData(req){
    let validName = false;
    let validId = false;
    let validObj = false;
  
    // checks object type
    if(req.body && typeof(req.body) === "object"){
      validObj = true;
    } else {
      return validObj;
    }
  
      
    let requestId = parseInt(req.params.id);
    let requestName = req.body.name;
  
    // checks id
    for (let i = 0; i < db.length; i++){
      if (db[i].id === requestId){
        validId = true;
      }
    }
  
    // checks name
    if(requestName && typeof requestName  === 'string'){
      validName = true;
    }
  
  
    return valid;
  }

  module.exports = isValidData;
  