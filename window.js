var img = document.querySelectorAll('.click'),
  backPop = document.getElementById('backPop'),
    popUp = document.getElementById('popUp'),
    bigImg= document.getElementById('bigImg');
[].forEach.call(img, function(elem) {
  var src = elem.getAttribute('src');
  elem.onclick = function() { 
    bigImg.setAttribute('src',src);
    backPop.style.display = "block";
  }
});
backPop.onclick = function(elem){
  if(!(elem.target.closest("#popUp"))){
      backPop.style.display = 'none';
     }    
}
