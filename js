const toggleMenu = document.querySelector('.toggle-menu');
const navMenu = document.querySelector('nav ul');
const menuLinks = document.querySelectorAll('nav ul li a'); // كل اللينكات جوا الـ ul

// فتح أو غلق القائمة لما ندوس على الآيكونة
toggleMenu.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});

// إخفاء القائمة لما ندوس على أي لينك من اللينكات
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('show');
    });
});
