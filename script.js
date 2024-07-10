const images = document.querySelectorAll('.cid-u6ejzvNxVC');
    let index = 0;
    
    function changeBackground() {
        index++;
        if (index === images.length) {
            index = 0;
        }
        images.forEach(image => image.style.opacity = 0);
        images[index].style.opacity = 1;
    }