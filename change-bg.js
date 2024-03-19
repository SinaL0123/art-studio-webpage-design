// Preload images
const images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];
images.forEach(image => {
    new Image().src = image;
});
