const images = [
    "images/001.png",
    "images/002.png",
    "images/003.png",
    "images/004.png",
    "images/005.png",
    "images/006.png",
    "images/007.png",
    "images/008.png",
    "images/009.png",
    "images/010.png",
    "images/011.png",
    "images/012.png",
    "images/013.png",
    "images/014.png",
    "images/015.png",
    "images/016.png",
    "images/017.png",
    "images/018.png",
    "images/019.png",
    "images/020.png",
    "images/021.png",
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