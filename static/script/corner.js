
const imageId = 'example://1';
const element = document.getElementById('dicomImage');
cornerstone.enable(element);
cornerstone.loadImage(imageId).then(function(image) {
    cornerstone.displayImage(element, image);
});