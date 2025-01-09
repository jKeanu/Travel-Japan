import Masonry from "masonry-layout";

window.onload = () => {
    const grid = document.querySelector('.grid-popular-places')
    const masonry = new Masonry(grid, {
        itemSelector: '.popular-place-container',
        columnWidth: '.popular-place-container',        
        gutter: 5,
        originTop: true,
        horizontalOrder: true,
    })
}

