
var p = document.querySelector('p');
var img = document.querySelector('img');
console.log(p);

p.addEventListener('click', function(){
  img.classList.toggle('hidden');

  var containsMaybe = img.classList.contains('hidden')

  if (containsMaybe === true) {
    p.textContent = 'Show me the image!'
  }
  else {
    p.textContent = 'HIDE IT!';
  }

});
