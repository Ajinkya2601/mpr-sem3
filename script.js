   document.addEventListener('DOMContentLoaded', function() {
    const place = document.getElementById('imagechanger');
    const slider1 = document.getElementById('slider1');
    const slider2 = document.getElementById('slider2');
    const imgArray = ['dog.jpg', 'cat-homepg.webp', 'shelter-homepg.jpg', 'catrun-homepg.webp', 'doghomepg (3).jpg'];
    let i = 0;
    let id;

    function changeImage() {
                place.style.background = `url('${imgArray[i]}')`;
                place.style.backgroundRepeat = 'no-repeat';
                place.style.backgroundPosition ='right'
                place.style.backgroundSize = 'cover';
                i = (i + 1) % imgArray.length;
    }

    function Interval() {
       id = setInterval(changeImage, 2000);
    }

    slider2.addEventListener('click', () => {
        clearInterval(id)
        changeImage()
        Interval()
    });

    slider1.addEventListener('click', () => {
        clearInterval(id)
        i = (i - 2 + imgArray.length) % imgArray.length;
        console.log('Slider 1 clicked');
        console.log('New index:', i);
        console.log(imgArray[i])
        changeImage();
        Interval();
    });

    setTimeout(Interval, 0);

});