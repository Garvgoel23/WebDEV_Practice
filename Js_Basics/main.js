// single element
//console.log(document.querySelector('h1'));

// multiple element
//console.log(document.querySelectorAll('.item'));
//console.log(document.getElementsByClassName('item'));
//const items = document.querySelectorAll('.item');

//items.forEach((item) => console.log(item));

//const ul = document.querySelector('.item');
//ul.lastElementChild.remove();
/*
const btn = document.querySelector('.btn');
btn.addEventListener('click', (e) =>{
    e.preventDefault();
    document.querySelector('#my-form').computedStyleMap.background = '#accc';

})*/
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);
function onSubmit(e) {
    e.preventDefault();
    if(nameInput==='' || emailInput ===''){
        alert('please enter fields');
    }else{
        console.log('sucess');
    }
}

