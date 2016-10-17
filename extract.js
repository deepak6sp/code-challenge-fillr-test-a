module.exports.extract = function(window) {
  
	// Write your solution to Task #1 - Extract Metadata task here
	var doc = window.document;
	var id = doc.getElementById("main-content");

	var inputs = id.getElementsByTagName("input"); // get all input fields
	var jsonFile = {};

	for (inputsIndex = 0; inputsIndex < inputs.length; inputsIndex++) {
		var inputName = inputs[inputsIndex].name.trim();   // get input field
		var inputLabel = inputs[inputsIndex].parentNode.previousSibling.innerHTML.trim(); // get label field
		jsonFile[inputLabel] = inputLabel + " " + inputName;   // add to json objects
	}
	return(jsonFile);   // return created json objects
}
