document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('video');
    const progressBar = document.querySelector('.progress-bar');
    
    if (video) {
        video.addEventListener('timeupdate', function() {
            const progress = (video.currentTime / video.duration) * 100;
            progressBar.style.width = progress + '%';
            
            if (video.currentTime === video.duration) {
                progressBar.style.width = '0%';
            }
        });
    }
});


// Прокрутка к нижней части видео-секции
document.addEventListener('DOMContentLoaded', function() {
    const videoSection = document.querySelector('.video-section');
    setTimeout(() => {
        videoSection.scrollIntoView({ 
            block: 'end',
            behavior: 'smooth'
        });
    }, 100);
});
