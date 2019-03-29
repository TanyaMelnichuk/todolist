let selectAllButton = document.getElementById('selectAll');
let inputElement = document.getElementById('input');
let ulElement = document.getElementById('list');
let todoList = [];

selectAllButton.addEventListener('click', () => {
	console.log("true");
})

inputElement.addEventListener('keydown', e => {
	if (e.keyCode === 13 || e.key === 'Enter') {
		todoList.unshift({
			content: inputElement.value,
			done: false,
			selected: false,
		});
		inputElement.value = '';
		updateVew ()
	}	
})


function updateVew () {
	
	ulElement.innerHTML = '';
	
	for ( let index = 0; index < todoList.length; index++ ) {
		
		let todoItem = todoList[index];
		
		let liElement = document.createElement('li');
		liElement.className = 'list-group-item';
		ulElement.appendChild(liElement);
		
		let divElement = document.createElement('div');
		divElement.className = 'form-group form-check';
		liElement.append(divElement);
		
		let checkboxElement = document.createElement('input');
		divElement.append(checkboxElement);
		checkboxElement.className = 'form-check-input';
		checkboxElement.type = 'checkbox';
		checkboxElement.id ='todoItem' + index;
		checkboxElement.checked = todoItem.selected;
		
		let labelElemet = document.createElement('label');
		divElement.append(labelElemet);
		labelElemet.className = 'form-check-label';
		if ( todoItem.done ) {
			labelElemet.className += ' todoDone'
		}
		labelElemet.setAttribute('for', 'todoItem' + index);
		labelElemet.innerText = todoItem.content;
		
		
		
		if(!todoItem.done){
			let buttonDoneElement = document.createElement('button');
			divElement.append(buttonDoneElement);
			buttonDoneElement.className = 'btn btn-primary';
			buttonDoneElement.type = 'button';
			buttonDoneElement.innerText = 'Done';
			
			buttonDoneElement.addEventListener('click', () => {
				todoItem.done = !todoItem.done;
				updateVew();
			})
		}
		
		else {
			let buttonRemoveElement = document.createElement('button');
			divElement.append(buttonRemoveElement);
			buttonRemoveElement.className = 'btn btn-danger';
			buttonRemoveElement.type = 'button';
			buttonRemoveElement.innerText = 'Remove';

			buttonRemoveElement.addEventListener('click', () => {
				todoList = todoList.filter(
				currentToDOItem => currentToDOItem !== todoItem 
				)

				updateVew();
			})
		}
		
		
		checkboxElement.addEventListener('change', () => {
			todoItem.selected = checkboxElement.checked;
		})
	}
	
}


document.getElementById('doneAction').addEventListener('click', () => {
	for ( let todoItem of todoList ) {
		if (todoItem.selected) {
			todoItem.done = true;
			todoItem.selected = false;
		}
	}
	updateVew ();
})

document.getElementById('restoreAction').addEventListener('click', () => {
	console.log("restoreAction btn")
})

document.getElementById('removeAction').addEventListener('click', () => {
	for ( let todoItem of todoList ) {
		if (todoItem.selected) {
			todoList = todoList.filter(
			currentToDOItem => currentToDOItem !== todoItem 
			)
		}
	}
	updateVew ();
})


selectAllButton.addEventListener('click', () => {
	for( todoItem of todoList ) {
		todoItem.selected = true;
	}
	updateVew ();
	
})














