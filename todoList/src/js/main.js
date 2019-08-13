console.log('omg it works')

// make button clickable

let addItem = document.querySelector('.add-item')
let newItem = document.querySelector('.new-item')



let createNewItem = function() {
	console.log('added items')

	// add new item to the list
	let ul = document.querySelector('ul')
	let li = document.createElement('li')

	ul.appendChild(li)

	let newItem = document.querySelector('.new-item')

	li.textContent = newItem.value;

	newItem.value = ''

	// malke something

	// li.appendChild( something)

	// show how many items are in a list

	updateTotal()

	let checkbox = document.createElement('input')

	checkbox.setAttribute('type', 'checkbox')
	// put checkbox in the LI

	li.appendChild(checkbox)

	checkbox.addEventListener('click', function() {

		// put a line through the LI
		// put a class of finished on the LI

		li.classList.toggle('finished')

		console.log('finished')
	})
}

newItem.addEventListener('keydown', function() {
	if (event.keyCode === 13) {
		createNewItem()
   	}
})

addItem.addEventListener('click', createNewItem)








let clearFinishedItem = document.querySelector('.clear-finished')

clearFinishedItem.addEventListener('click', function(){

	let finishedItem = document.querySelector('.finished');

		finishedItem.forEach(function(item) {
  		deleteItem(finishedItem);
	});

	finishedItem.remove()

	console.log('buh bye', finishedItem)

	updateTotal()

})






let updateTotal = function(){

	let numberOfItems = document.querySelector('.item-total')

	numberOfItems.textContent = document.querySelectorAll('li').length;

}
 
// clear the entire list

/*	let deleteItem = document.querySelector('.clear-finished')

	deleteItem.addEventListener('click', function() {

		console.log('delete list')
	}
*/
