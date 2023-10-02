//// global variabels
let list = document.querySelector('ul');
let input = document.querySelector('input');
let submit = document.querySelector('button');


/////logic///////
function submitFunction() {
  event.preventDefault();
  console.log('form submitted')
  if (input.value.length < 2
    || input.value.trim() === ''
    || input.value.startsWith(' ')
    || input.value.match(/\s{3,}/)) { alert('Please enter valid text'); return }

  let value = input.value;
  input.value = '';

  let listItem = document.createElement('li');
  let newPara = document.createElement('p')
  const deleteButton = document.createElement('button');
  const editButton = document.createElement('button');

  listItem.appendChild(newPara);
  listItem.appendChild(deleteButton);
  listItem.appendChild(editButton);
  newPara.textContent = value;
  deleteButton.textContent = 'Delete';
  editButton.textContent = 'Edit';



  list.appendChild(listItem);

  deleteButton.addEventListener('click', () => list.removeChild(listItem));
  input.focus();

  editButton.addEventListener('click', () => {
    event.stopPropagation();
    editItem();
  });

  function editItem() {
    const originalContent = newPara.textContent
    newPara.contentEditable = true;
    newPara.focus()

    newPara.addEventListener('blur', () => {
      const editedContent = newPara.textContent
      if (editedContent.length < 2
        || editedContent.startsWith(' ')
        || editedContent.trim() === ''
        || editedContent.match(/\s{3,}/)) { newPara.textContent = originalContent };

      newPara.contentEditable = false;
    })


    newPara.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') { event.preventDefault() }
    })
  }
};
