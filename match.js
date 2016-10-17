module.exports.match = function(hash) {

  // Write your solution to Task #2 - Match Metadata task here
	var jsonObj = hash;
	var array = [];
	var regex = new RegExp(/^(card)\s(expire)\s(date)\s[a-z]\w+/);
	
	Object.keys(jsonObj).forEach(function(key) {
 		if(regex.test(key)){
	    	array.push(key);
 		}

	});
	return array;
	
}