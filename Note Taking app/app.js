
let form = document.querySelector('form');
form.addEventListener('submit', function(event){
    event.preventDefault();
    let list = document.querySelector('.list');
    let listItem = document.createElement('li');
    listItem.innerText = form.elements.note.value;

    let removeBtn = document.createElement('button');
    removeBtn.classList.add('rmv');
    removeBtn.innerText = 'Remove';

    removeBtn.addEventListener('click', function() {
        listItem.remove(); 
    });

    listItem.appendChild(removeBtn);
    list.appendChild(listItem);

    form.elements.note.value = null;
});