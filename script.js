const images = [
    "images/004.jpeg",
    "images/003.jpeg",
    "images/005.jpeg",
    "images/006.jpeg",
    "images/007.jpeg",
    "images/008.jpeg",
    "images/009.jpeg",
    "images/010.jpeg",
    "images/011.jpeg",
    "images/012.jpeg",
    "images/013.jpeg",
    "images/014.jpeg",
    "images/015.jpeg",
    "images/016.jpeg",
    "images/017.jpeg",
    "images/018.jpeg",
    "images/019.jpeg",
    "images/020.jpeg",
    "images/021.jpeg",
    "images/022.jpeg",
    "images/023.jpeg",
    "images/024.jpeg",
    "images/025.jpeg",
    "images/026.jpeg",
    "images/027.jpeg",
    "images/028.jpeg",
    "images/029.jpeg",
    "images/030.jpeg",
    "images/031.jpeg",
    "images/032.jpeg",
    "images/033.jpeg",
    "images/034.jpeg",
    "images/035.jpeg",
    "images/036.jpeg",
    "images/037.jpeg"
];
let page = 1;
let pageSize = 10;

function scrollToTop() {
    const startY = window.scrollY;
    const duration = 400;

    const startTime = performance.now();

    function animate(currentTime) {
        const elapsed = currentTime - startTime;
        const t = Math.min(elapsed / duration, 1);

        window.scrollTo(0, startY * (1 - t));

        if (t < 1) {
            requestAnimationFrame(animate);
        }
    }

    requestAnimationFrame(animate);
}

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

    document.getElementById("pageSize").value = pageSize;
    document.getElementById("pageSizeMirror").value = pageSize;
}

function previousPage() {
    if (page > 0) {
        page--;
        render();
        scrollToTop();
    }
}

function nextPage() {
    if ((page + 1) * pageSize < images.length) {
        page++;
        render();
        scrollToTop();
    }
}

function changePageSize(size) {
    pageSize = parseInt(size);
    page = 0;
    render();
    scrollToTop();
}

document.getElementById("prevTop").onclick = previousPage;
document.getElementById("prevBottom").onclick = previousPage;

document.getElementById("nextTop").onclick = nextPage;
document.getElementById("nextBottom").onclick = nextPage;

document.getElementById("pageSize").onchange = e =>
    changePageSize(e.target.value);

document.getElementById("pageSizeMirror").onchange = e =>
    changePageSize(e.target.value);

render();