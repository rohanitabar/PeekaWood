$('.carousel').carousel({  
  interval: 3000, 
  pause: 'hover'  
});
$(document).ready(function () {  
  $('#carouselExampleFade').carousel({  
      interval: 4000
  });  
}); 

        const search = document.getElementById("search");

        search.addEventListener("keypress", function () {
          const query = search.value;
          if (query) {
            resultElement.classList.add("result");
            resultElement.innerText = "شما جستجو کردید: " + query;
          } else {
            resultElement.innerText = "";
            resultElement.classList.remove("result");
          }
        });  