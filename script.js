const images = [
    "images/004.jpeg",
    "images/003.jpeg",
    "images/005.jpeg",
    "images/006.jpeg",
    "images/007.jpeg",
    "images/008.jpeg",
    "images/009.jpeg",
    "images/010.jpeg"
];
let page = 0;
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