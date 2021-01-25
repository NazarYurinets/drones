const images = [
    'pictures1.png',
    'pictures2.jpeg',
    'pictures3.jpeg',
    'pictures4.png',
    'pictures5.png'
];



let currImgIdx = 0;

function showCurrentImage() {
    const imgContainer = document.querySelector('.carousel .current-image');
    imgContainer.src = 'img/' + images[currImgIdx];
}

showCurrentImage();

const nextButton = document.querySelector('.carousel .next');
nextButton.addEventListener('click', nextButtonClicked);

function nextButtonClicked() {
    currImgIdx++;
    if (currImgIdx >= images.length) currImgIdx = 0;
    showCurrentImage();
}

// Завдання - закодити поведінку кнопки Prev
const prevButton = document.querySelector('.carousel .prev');
prevButton.addEventListener('click', prevButtonClicked);

function prevButtonClicked() {
    currImgIdx--;
    if (currImgIdx < 0) currImgIdx = images.length - 1;
    showCurrentImage();
}