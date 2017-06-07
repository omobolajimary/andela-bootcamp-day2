'use strict';
module.exports = {
    reverseString:(str) =>{
    if(str.length === 0){
        return null;
    }
    if(str===(str.split("").reverse().join("") )){
        return true;
    }
 
      return str.split("").reverse().join("");

}
}

