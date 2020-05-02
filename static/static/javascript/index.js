var slideIndex = 1;
showDivs(slideIndex);
slide();

function slide() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}    
  x[slideIndex-1].style.display = "block";  
  setTimeout(slide, 5000);    
}
function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}


$(window).scroll(function(){
    var scrollval = $(this).scrollTop();    // It will return scroll value
    
    $(".sir").css("transform",'translate(0px,-'+scrollval/2+'%)');
});