exports.isCharacterMatch = function(string1, string2) {
  // normalize, since we don't care about case	
  string1 = string1.toUpperCase();	
  string2 = string2.toUpperCase();	
  // remove spaces and convert to array	
  let arr1 = string1.split(' ').join('').split('').sort();	
  let arr2 = string2.split(' ').join('').split('').sort();	
  // check to see if same length	
  if (arr1.length !== arr2.length){	
    return false;	
  }	
  //check to see if same values	
  for (let i = 0; i < arr1.length; i++){	
    if (arr1[i] !== arr2[i]){	
      return false;	
    }	
  }	
  return true;
};
