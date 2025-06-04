document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('video');
    const progressBar = document.querySelector('.progress-bar');
    
    video.addEventListener('timeupdate', function() {
        const progress = (video.currentTime / video.duration) * 100;
        progressBar.style.width = progress + '%';
        
        // Сброс при завершении цикла
        if (video.currentTime === video.duration) {
            progressBar.style.width = '0%';
        }
    });
    
    // Плавная прокрутка
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});