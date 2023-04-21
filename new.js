//here parent element or node means the element whose section this code belongs to
var items=document.querySelector('#items');
//console.log(items.parentNode);
//console.log(items.parentNode.parentNode);
//items.parentNode.style.backgroundColor='#f4f4f4';
//console.log(items.parentElement);
//console.log(items.parentElement.parentElement);
//items.parentElement.style.backgroundColor='#f4f4f4';
//the diff between child node and children is that in children the linebraks are ignored in the node list where as in child node every 
//thing is given literally
//console.log(items.childNodes);
//console.log(items.children);  
//suppose you want to acess the first element of children then
//console.log(items.children[1])
//items.children[1].style.backgroundColor='green';
//suppose if you wnt first child of element then
//console.log(items.firstChild);
console.log(items.firstElementChild);
items.firstElementChild.textContent='HELLO item1';
//console.log(items.lastChild);
//console.log(items.lastElementChild);
//here sibling is the element next to the elementselected
//console.log(items.nextSibling);
//console.log(items.nextElementSibling);
console.log(items.previousSibling);
console.log(items.previousElementSibling);

    //var item=document.querySelector('.container');
    //item.children.textContent='HELLO item Lister';
var newdiv=document.createElement('div');
newdiv.className='newdiv';
newdiv.id='hello1';
newdiv.setAttribute('title','this is new division');
var newdivtext=document.createTextNode('HEllo');
newdiv.appendChild(newdivtext);

//console.log(newdiv);
var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');
container.insertBefore(newdiv,h1);


