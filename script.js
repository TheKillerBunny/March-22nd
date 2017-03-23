
var p = document.querySelector('p');
var img = document.querySelector('img');
console.log(p);

p.addEventListener('click', function(){
  //p.classList.toggle('chosen');
  img.classList.toggle('hidden');
});
