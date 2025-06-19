const nextButton = document.querySelector('.next-btn');
const video = document.querySelector('.hero-video');

const movieList = ['videos/hero-1.mp4', 'videos/hero-2.mp4', 'videos/hero-3.mp4', 'videos/hero-4.mp4'];
let currentIndex = 0;

nextButton.addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % movieList.length;
    video.src = movieList[currentIndex];
    video.load(); 
    video.play(); 
});

