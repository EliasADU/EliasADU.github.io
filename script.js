const images = [
    "images/001.jpeg",
    "images/002.jpeg",
    "images/003.jpeg",
    "images/004.jpeg",
    "images/005.jpeg",
    "images/006.jpeg",
    "images/007.jpeg",
    "images/008.jpeg",
    "images/009.jpeg",
    "images/010.jpeg"
];

const pageSize = 10;
let page = 0;

function render() {
    const gallery = document.getElementById("gallery");
    gallery.innerHTML = "";

    const start = page * pageSize;
    const end = start + pageSize;

    images.slice(start, end).forEach(src => {
        const img = document.createElement("img");
        img.src = src;
        gallery.appendChild(img);
    });
}

document.getElementById("prev").onclick = () => {
    if (page > 0) {
        page--;
        render();
    }
};

document.getElementById("next").onclick = () => {
    if ((page + 1) * pageSize < images.length) {
        page++;
        render();
    }
};

render();