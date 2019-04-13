const list = document.querySelector('#movie-list ul');
const forms = document.forms;

// delete books or movies
list.addEventListener('click', (e) => {
  if(e.target.className == 'delete'){
    const li = e.target.parentElement;
    li.parentNode.removeChild(li);
  }
});

// add movie
const addForm = forms['add-movie'];
addForm.addEventListener('submit', function(e){
  e.preventDefault();

  // create elements
  const value = addForm.querySelector('input[type="text"]').value;
  const li = document.createElement('li');
  const movieName = document.createElement('span');
  const deleteBtn = document.createElement('span');

  // add text content
  movieName.textContent = value;
  deleteBtn.textContent = 'delete';

  // append to DOM
  li.appendChild(movieName);
  li.appendChild(deleteBtn);
  list.appendChild(li);
  //list.insertBefore(li, list.querySelector('li:first-child'));
});

// add appjs
