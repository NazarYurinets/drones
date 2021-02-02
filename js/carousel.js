for (const carousel of document.querySelectorAll('.carousel')) {
    const container = carousel.querySelector('.current')
    const blocks = carousel.querySelectorAll('.carousel-block');

    let currImgIdx = 0;

    function showCurrentImage() {
        const block = blocks[currImgIdx];
        console.log(currImgIdx);

        container.scrollLeft = block.offsetLeft;

    }

    showCurrentImage();

    const nextButton = carousel.querySelector('.carousel .next');
    nextButton.addEventListener('click', nextButtonClicked);

    function nextButtonClicked() {
        currImgIdx += 2;
        if (currImgIdx >= blocks.length) currImgIdx = 0;
        showCurrentImage();
    }

    const prevButton = carousel.querySelector('.carousel .prev');
    prevButton.addEventListener('click', prevButtonClicked);

    function prevButtonClicked() {
        currImgIdx -= 2;
        if (currImgIdx < 0) currImgIdx = blocks.length - 1;
        showCurrentImage();
    }
}