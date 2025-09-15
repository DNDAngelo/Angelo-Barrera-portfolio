

document.addEventListener('DOMContentLoaded', function () {
  const images = document.querySelectorAll('.project-image');

  images.forEach(image => {
    image.addEventListener('click', function () {
      console.log('Image clicked:', image);

    });
  });
});
