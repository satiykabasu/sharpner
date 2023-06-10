console.log("Hello , welcome to the sharpner");
console.log("this is version control history");
console.dir(document);//display all the properties and method associated with document obj 
console.log("document.domain");
console.log(document.title);
console.log(document.all)//it gives all array and html element associated with document obj
//it shows how all html element associated with index no,you can change the property via index but it
//is not good choice as if i change or add any html element then it will change those style
console.log(document.form)//accessed via index
console.log(document.image);


let value=document.getElementById('header-title');
console.log(value.innerText);//it focus on style for span
console.log(value.textContent);//does not focus on style
//value.innerHTML='<h3>Hello</h3>'
//onsole.log(value.innerHTML)
value.style.borderBottom='solid 3px black';
let value2=document.getElementById('first');
value2.style.fontSize='bold';
value2.style.color='green';


value3=document.getElementsByClassName('list-group-item');
//console.log(value3);
value3[2].style.backgroundColor='green';
for(let i=0;i<value3.length;i++)
{
    value3[i].style.fontSize='bold';
    value3[i].style.color='blue';
}


let value4=document.getElementsByTagName('li');
for(let i=0;i<value4.length;i++)
{
    
    value4[i].style.backgroundColor='aqua';
}




let value5=document.querySelector('#main-header');
value5.style.border='thin solid black';
let value6=document.querySelector('input');
value6.value="Hello";
let value7=document.querySelector('input[type=submit]');
value7.value="send";
let value8=document.querySelector('#items');
value8.style.border='2px solid red';
let value9=document.querySelector('.list-group-item');
value9.style.color='white';
let value10=document.querySelector('.list-group-item:nth-child(2)');
value10.style.backgroundColor='green';
let value11=document.querySelector('.list-group-item:nth-child(3)');
value11.style.display='none';
//let value12=document.querySelector('.list-group-item:last-child');
//value11.style.color='brown';
//console.log(value11)



let title=document.querySelectorAll('title');
title[0].textContent='hello'
let value13=document.querySelectorAll('li:nth-child(odd)');
for(let i=0;i<value13.length;i++)
{
    value13[i].style.backgroundColor='green';
}
