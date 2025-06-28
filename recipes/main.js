import recipes from './recipes.mjs';

function randomNumber() {
    return Math.floor(Math.random()*8);
}

function getRandomListEntry(list) {
	const listLength = list.length;
	const randomNum = randomNumber(listLength);
	return list[randomNum];
}

console.log(getRandomListEntry(recipes));