// دسترسی به اینپوت‌ها، دکمه و پاراگراف
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const sumButton = document.getElementById('sumButton');
const resultParagraph = document.getElementById('result');

// افزودن یک event listener به دکمه برای گوش دادن به کلیک‌ها
sumButton.addEventListener('click', function() {
    // گرفتن مقادیر اینپوت‌ها و تبدیل آنها به عدد
    const num1 = Number(num1Input.value);
    const num2 = Number(num2Input.value);

    // جمع کردن اعداد
    const sum = num1 + num2;

    // نمایش نتیجه در پاراگراف
    resultParagraph.innerText = 'Sum: ' + sum;
});

