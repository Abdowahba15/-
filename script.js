// 1. التحكم في حجم الخط
let currentFontSize = 1.4; // الحجم الافتراضي بالـ rem

function changeFontSize(action) {
    const content = document.getElementById('novel-content');
    if (action === 1) {
        currentFontSize += 0.1;
    } else {
        currentFontSize -= 0.1;
    }
    content.style.fontSize = currentFontSize + 'rem';
}

// 2. تفعيل الوضع الليلي
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    // تغيير نص الزر بناءً على الوضع
    if (document.body.classList.contains('dark-mode')) {
        themeToggle.textContent = 'الوضع النهاري';
    } else {
        themeToggle.textContent = 'الوضع الليلي';
    }
});

// 3. تأثير شفافية الناف بار عند التمرير
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(0, 51, 102, 0.95)';
        navbar.style.padding = '10px 8%';
    } else {
        navbar.style.background = 'var(--primary-blue)';
        navbar.style.padding = '15px 8%';
    }
});
