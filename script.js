var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

form.addEventListener('submit',addItem);

itemList.addEventListener('click',removeItem);

filter.addEventListener('keyup',filterItems);
function addItem(e){
	e.preventDefault();

	var newItem = document.getElementById('item').value;

	var li = document.createElement('li');
	li.className = 'list-group-item';

	li.appendChild(document.createTextNode(newItem));

	var delButton = document.createElement('button');

	delButton.className = 'btn btn-danger btn-sm float-right delete';

	delButton.appendChild(document.createTextNode('Done'));

	li.appendChild(delButton);


	itemList.appendChild(li);

}

function removeItem(e){
	if(e.target.classList.contains('delete')){
			var li = e.target.parentElement;
			itemList.removeChild(li);
	}

}