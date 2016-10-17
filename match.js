module.exports.match = function(hash) {

  // Write your solution to Task #2 - Match Metadata task here
	var jsonObj = hash;
	var array = [];
	Object.keys(jsonObj).forEach(function(key) {
 		if(/^card expire date day|card expire date month|card expire date year/.test(key)){
	    	array.push(key);
 		}

	});
	return array;
	
}