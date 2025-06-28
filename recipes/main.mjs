import recipes from './recipes.mjs';

function randomNumber() {
    return Math.floor(Math.random()*8);
}

function getRandomListEntry(list) {
	const listLength = list.length;
	const randomNum = randomNumber(listLength);
	return list[randomNum];
}

function recipeTemplate(recipe) {
	return `<section class="recipe">
            <img src="${recipe.image}" alt="Image of ${recipe.name}">
            <section class="recipe-info">
                ${tagsTemplate(recipe.tags)}
                <h3 class="nameOfRecipe">
                    ${recipe.name}
                </h3>
                ${ratingTemplate(recipe.rating)}
                <p class="description">
                    ${recipe.description}
                </p>
            </section>
        </section>`
}

function tagsTemplate(tags) {

	let html = '<p class="tags">';
	for (let i =0; i < tags.length; i++) {
		html += `${tags[i]} `;
	}
	html += `</p>`;
	return html;
}

function ratingTemplate(rating) {

	let html = `<span
		class="rating"
		role="img"
		aria-label="Rating: ${rating} out of 5 stars"
		>
			`;
	
	for (let i = 1; i <= 5; i++) {

		if (i <= rating) {
			html += `<span aria-hidden="true" class="icon-star">⭐</span>
			`;
		} else {
			html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
		}
	}
	html += `</span>`;
	return html;
}

function renderRecipes(recipeList) {

	const outputElement = document.querySelector('main');
	const htmlStrings = recipeList.map(recipe => recipeTemplate(recipe));
	outputElement.innerHTML = htmlStrings.join('');
}

function init() {
	const recipe = getRandomListEntry(recipes);
	renderRecipes([recipe]);
}

init();

function filterFunction(recipe) {
	const query = currentQuery;

	const inName = recipe.name.toLowerCase().includes(query);
	const inDescription = recipe.description.toLowerCase().includes(query);

	const inTags = recipe.tags && recipe.tags.find(tag => tag.toLowerCase().includes(query));

	const inIngredients = recipe.ingredients && recipe.ingredients.find(ing => ing.toLowerCase().includes(query));

	return inName || inDescription || inTags || inIngredients;
}

function sortFunction(a, b) {
	return a.name.localeCompare(b.name);
}

let currentQuery = ''; // global helper for filterFunction

function filter(query) {
	currentQuery = query; // store query so filterFunction can use it

	const filtered = recipes.filter(filterFunction); // use filterFunction
	const sorted = filtered.sort(sortFunction);      // use sortFunction

	return sorted;
}

function searchHandler(e) {
	e.preventDefault(); // stop form reload

	const input = document.querySelector('#searchBarId');
	const query = input.value.toLowerCase();

	const filteredList = filter(query); // use our filter()
	renderRecipes(filteredList);        // show results
}

const searchForm = document.querySelector('.searchBar');
searchForm.addEventListener('submit', searchHandler);