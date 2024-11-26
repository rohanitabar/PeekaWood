// CommentBox
const User=document.getElementById('exampleFormControlInput1').value.trim();
const TextComment=document.getElementById('exampleFormControlTextarea1').value.trim();
if (User.length&&TextComment.length>0) {
  result.forEach(function makeCommentDiv(item){
    let resultItem=document.createElement('div');
      resultItem.textContent = item; 
      resultsContainer.appendChild(resultItem);
  })
}
 else {
     resultsContainer.textContent = 'هیچ نتیجه‌ای برای "' + item + '" پیدا نشد.';
}

// SearchBox
document.getElementById('search-item').addEventListener('submit', function(event) {  
    event.preventDefault(); // جلوگیری از ارسال فرم به صورت پیش‌فرض  

    let query = document.getElementById('search-box').value.trim(); // گرفتن مقدار ورودی جستجو و حذف فضاهای اضافی  

    if (query) {  
        console.log('جستجو برای:', query);  
        
        // در اینجا می‌توانید نتایج واقعی را از یک API بدست آورید  
        // به عنوان مثال می‌توانیم نتایج شبیه‌سازی شده بسازیم  
        var results = simulateSearch(query);  
        
        // نمایش نتایج جستجو  
        displayResults(results);  
    } else {  
        alert('لطفا یک عبارت جستجو وارد کنید!'); // هشدار در صورت خالی بودن ورودی  
    }  
});  

// تابع شبیه‌سازی جستجو  
function simulateSearch(query) {  
    // داده‌های شبیه‌سازی شده  
    let sampleData = [  
        'این یک نمونه جستجو است',  
        'مدل‌های مختلف جستجو',  
        'نکات جستجو',  
        'روش‌های جستجوی موثر',  
        'افزایش دقت جستجو',  
    ];  

    // فیلتر کردن داده‌ها بر اساس عبارت جستجو  
    return sampleData.filter(item => item.includes(query));  
}  

// تابع برای نمایش نتایج  
function displayResults(results) {  
    let resultsContainer = document.getElementById('results'); // گرفتن عنصر DIV برای نتایج  

    resultsContainer.innerHTML = ''; // پاک کردن نتایج قبلی  

    if (results.length > 0) {  
        results.forEach(function(item) {  
            let resultItem = document.createElement('div'); // ایجاد یک عنصر DIV برای هر نتیجه  
            resultItem.textContent = item; // قرار دادن متن نتیجه در عنصر  
            resultsContainer.appendChild(resultItem); // افزودن نتیجه به کانتینر نتایج  
        });  
    } else {  
        resultsContainer.textContent = 'هیچ نتیجه‌ای برای "' + query + '" پیدا نشد.'; // پیام اگر نتیجه‌ای یافت نشد  
    }  
}