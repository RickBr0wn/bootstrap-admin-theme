export function shuffleArray(arr) {
	for (var i = 0; i < arr.length; i++) {
  	let shuffled = [];
    let randomIndex = Math.floor(Math.random() *  arr.length);
		// If an item with this index already exists in the shuffled array, generate another index.
    while (shuffled.indexOf(arr[randomIndex]) !== -1) {
    	randomIndex = Math.floor(Math.random() *  arr.length);
    }
    	shuffled.push(arr[randomIndex]);
    }
    console.log(shuffleArray(arr));
    return shuffled;
}