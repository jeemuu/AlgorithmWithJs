

function testCase(input, sortFun){
	console.log("input :" + input);
	sortFun(input);
	console.log("Sorted:" + input);
	console.log("expect:" + input.sort());
}

function testCase_search(input, toFind, searchFun){
	console.log("input :" + input);
	var idx = searchFun(input, toFind);
	console.log("result:" + idx);
	console.log("expect:" + input.indexOf(toFind));
}