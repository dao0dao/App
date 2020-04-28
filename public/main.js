let li;
let map
window.addEventListener('DOMContentLoaded', () => {

    li = document.querySelectorAll('ol li');
    map = document.querySelector('.mapContainer');
    console.log(li);
    console.log(map);

    li[0].addEventListener('click', () => {
        map.style=''
    });
    li[1].addEventListener('click', () => {
        map.style.zIndex = -1;
        map.style.opacity = 0;
    });

});