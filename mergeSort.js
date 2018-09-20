// Implementing merge Sort in JS

// Merge Sort Algo

// 1) Divide the array into half
// 2) sort the left half before right half
// 3) divide the left array into half repeat step 2 till array.lenght < 2
// 4) sort the left half and right half and merge;


arr = process.argv.pop().split(" ").map(val => parseInt(val));
console.log(arr);

function mergeSort(arr) {
	if (arr.length < 2) return arr;

	let mid = Math.floor(arr.length / 2);
	let larr = mergeSort(arr.slice(0,mid));
	let rarr = mergeSort(arr.slice(mid));
	
	let i = 0;
	let j = 0;
	
	const sorted = [];
	while( i < larr.length && j < rarr.length ){

		if( larr[i] < rarr[j] && (i != larr.length) ){
			sorted.push(larr[i++]);
		}
		else{
			sorted.push(rarr[j++]);
		}
}

	if ( i == larr.length ) 
		rarr.slice(j).forEach( val => sorted.push(val));
	else
		larr.slice(i).forEach( val => sorted.push(val));

	return sorted;
}

sortedArr = mergeSort(arr);
console.log(sortedArr);

