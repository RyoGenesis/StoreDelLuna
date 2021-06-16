const left = $('#left');
const right = $('#right');
const images = $('#images div');
const firstImage = images.first();

let currentIndex = 0;


left.on('click', () => {
    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    updateSlider();
});

right.on('click', () => {
    currentIndex++;

    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    updateSlider();
});

function updateSlider() {
    const width = firstImage.width();
    const marginLeft = currentIndex * -width;

    firstImage.animate({
        marginLeft
    });
}