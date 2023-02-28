const ul = document.querySelector('.items');

ul.firstElementChild.textContent = 'Hello';
ul.firstElementChild.style.background = 'green';
ul.children[1].innerText = 'Brad';
ul.children[1].style.background = 'yellow';

const btn = document.querySelector('.btn');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('#my-form').style.background = '#ccc'; 

})


btn.addEventListener('mouseout', (e) => {

    e.preventDefault();
    document.querySelector('#my-form').style.background = '#ccc';
})

const nameInp = document.querySelector('#name');
const myform = document.querySelector('#my-form');

myform.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();
    console.log(nameInp);
}