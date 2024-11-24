// for Search Box
document
  .getElementById("search-box")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const searchTerm = document.getElementById("search").value; 
    console.log("جست‌وجو برای:", searchTerm); 

  
            fetch(`/search?query=${encodeURIComponent(searchTerm)}`)  
                .then(response => response.json())  
                .then(data => {  
                    console.log('نتایج جست‌وجو:', data);  
                })  
              .catch(error => console.error('خطا در جست‌وجو:', error));  
            
  });



// برای داشتن دو منوی  متفاوت توی گوشی و کامپیوتر
const menu = document.getElementById('menu');  

if (window.innerWidth <= 768) {  
    menu.classList.add('mobile-menu');  
} else {  
    menu.classList.add('desktop-menu');  
}