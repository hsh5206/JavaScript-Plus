const todoForm = document.querySelector('.todo-form');
const todoInput = document.querySelector('.todo-form input');
const deleteButton = document.querySelector('.delete');
const list = document.querySelector('.list');


function onTodoSubmit(e) {
  e.preventDefault();

  const value = todoInput.value;

  const newList = document.createElement('li');
  newList.setAttribute('class','item');
  
  const span = document.createElement('span');
  span.innerText = value;

  const btn = document.createElement('button');
  btn.setAttribute('class','delete');
  btn.innerHTML = '<i class="far fa-trash-alt"></i>';

  newList.appendChild(span)
  newList.appendChild(btn)
  list.appendChild(newList);

  // 새로 추가된 아이템으로 이동 scrolling
  newList.scrollIntoView()

  
  todoInput.value='';
  todoInput.focus();
}

list.addEventListener('click', (e) => {
  const temp = e.target.parentNode.parentNode;
  if (e.target.tagName === 'I') {
    list.removeChild(temp)
  }
})


todoForm.addEventListener('submit',onTodoSubmit);