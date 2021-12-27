const body = document.body;
// //Adding an element
// body.append(`Hello World, Bye`);
// //Creating an element
// const div = document.createElement('div');
// //modifying text elements
// /*২ টাই সেম মেথড, innerText css style follow 
// করে output দেয়, textContent as it s যা আছে তাই output দিবে*/
// div.innerText = `Hello Faysal`;
// div.textContent = 'Hello Mahmud';
// const div = document.createElement('div');
// // div.innerHTML = "<strong>Hello Faysal</strong>"
// const strong = document.createElement('strong');
// strong.innerText="Hello Faysal";
// div.append(strong);
const div = document.querySelector('div');
const span1 = document.querySelector('#hi');
const span2 = document.querySelector('#bye');
span2.remove();
div.append(span2);
console.log(span1.title);

body.append(div);
