const overlay = document.createElement('div');

overlay.style.position = 'fixed';
overlay.style.top = 0;
overlay.style.left = 0;
overlay.style.width = '100%';
overlay.style.height = '100%';
let opacity = 1;
overlay.style.opacity = opacity;
overlay.style.zIndex = '5';


document.body.appendChild(overlay);

// Add audio element
// const audio = document.createElement('audio');
// audio.src = 'https://www.soundjay.com/buttons/sounds/button-1.mp3';
// audio.autoplay = true;

// overlay.appendChild(audio);

//Add a video element that moves across the screen
const video = document.createElement('video');
video.src = 'https://www.w3schools.com/html/mov_bbb.mp4';
video.style.width = '50%';
video.style.height = '50%';
video.style.transition = 'left 5s linear';
video.autoplay = true;
video.loop = true;

video.style.position = 'absolute';
video.style.top = '50%';
video.style.left = '125%';
video.style.transform = 'translate(-50%, -50%)';
video.style.zIndex = '6';

overlay.appendChild(video);

setTimeout(() => {
    video.style.left = '-400px';
}, 1000);



// const droppingImg = document.createElement('img');
// droppingImg.src = 'https://e7.pngegg.com/pngimages/983/331/png-clipart-bomb-bomb-cartoon-bomb-explosion-cartoon-thumbnail.png';
// droppingImg.style.position = 'absolute';
// droppingImg.style.width = '200px';
// droppingImg.style.top = '-210px'; 
// droppingImg.style.left = '50%';
// droppingImg.style.transform = 'translateX(-50%)';
// droppingImg.style.transition = 'top 4.5s';
// droppingImg.style.zIndex = '10';


// overlay.appendChild(droppingImg);


// setTimeout(() => {
//     droppingImg.style.top = '35%';
// }, 1000);



// const secondImg = document.createElement('img');
// secondImg.src = 'https://img.pikbest.com/origin/10/13/53/566pIkbEsTSe7.png!bw700';
// secondImg.style.width = '0';
// secondImg.style.height = '0';
// secondImg.style.transition = 'width 0.2s, height 0.2s';

// setTimeout(() => {
//     secondImg.style.width = '210px';
//     secondImg.style.height = '210px';
// }, 4500); 


// secondImg.style.position = 'absolute';
// secondImg.style.top = '48%';
// secondImg.style.left = '50%';
// secondImg.style.transform = 'translate(-50%, -50%)';
// secondImg.style.zIndex = '11'; 

// overlay.appendChild(secondImg);



// const img = document.createElement('img');

// img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj8NkM1OokTEufZkPF2SazhjkXMVgsDNNUIg&s';
// img.style.width = '0';
// img.style.height = '0';
// img.style.transition = 'width 1.5s, height 1.5s';

// setTimeout(() => {
//     img.style.width = '250px';
//     img.style.height = '250px';
// }, 5000);

// img.style.position = 'absolute';
// img.style.top = '50%';
// img.style.left = '50%';
// img.style.transform = 'translate(-50%, -50%)';
// img.style.zIndex = '12'; 


// overlay.appendChild(img);