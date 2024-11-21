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
