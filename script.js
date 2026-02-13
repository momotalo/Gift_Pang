// Enable background music
const audio = document.getElementById('bgm');

document.addEventListener('click', () => {
    audio.muted = false;
    audio.volume = 0.6;
    audio.play();
}, { once: true });

// Gallery Page

let level = 0;

function openFolder(newLevel) {
    level = newLevel;
    render();
}

function goBack() {
    if (level > 0) {
        level--;
        render();
    }
}

function render() {
    const explorer = document.getElementById("explorer");
    const address = document.getElementById("addressBar");

    if (level === 0) {
        explorer.innerHTML = `
            <div class="flex flex-col items-center cursor-pointer group"
                onclick="openFolder(1)">

            <!-- Folder Icon -->
            <svg xmlns="http://www.w3.org/2000/svg"
                class="w-24 h-24 text-pink-500 group-hover:scale-110 transition"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path d="M10 4H2v16h20V6H12l-2-2z"/>
            </svg>

            <!-- Folder Name -->
            <span class="mt-2 text-gray-700 text-lg group-hover:text-pink-500 transition">
                รูปภาพของเรา
            </span>

            </div>
        `;
        address.innerText = "C:\\Users\\Love\\";
    }


    if (level === 1) {
        explorer.innerHTML = `
            <div class="flex flex-col items-center cursor-pointer group"
                onclick="openFolder(2)">

            <svg xmlns="http://www.w3.org/2000/svg"
                class="w-24 h-24 text-pink-500 group-hover:scale-110 transition"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path d="M10 4H2v16h20V6H12l-2-2z"/>
            </svg>

            <span class="mt-2 text-gray-700 text-lg group-hover:text-pink-500 transition">
                พร้อมดูรึยัง
            </span>

            </div>
        `;
    }

    if (level === 2) {
        explorer.innerHTML = `
        <div class="flex flex-col items-center cursor-pointer group"
            onclick="openFolder(3)">

        <svg xmlns="http://www.w3.org/2000/svg"
            class="w-24 h-24 text-pink-500 group-hover:scale-110 transition"
            fill="currentColor"
            viewBox="0 0 24 24">
            <path d="M10 4H2v16h20V6H12l-2-2z"/>
        </svg>

        <span class="mt-2 text-gray-700 text-lg group-hover:text-pink-500 transition">
            ถ้าแน่ใจแล้วก็เปิดเลย
        </span>

        </div>
    `;
    }

    if (level === 3) {

        address.innerText += "ถ้าแน่ใจแล้วก็เปิดเลย\\";

        let imagesHTML = `
                    <div class="grid grid-cols-4 gap-4 place-items-center">
                `;

        for (let i = 1; i <= 16; i++) {
            imagesHTML += `
                    <img src="./assets/img/gallery-${i}.jpg"
                        class="w-32 h-32 object-cover rounded-lg shadow-md cursor-pointer hover:scale-105 transition"
                        onclick="openImage(this.src)">
                `;
        }

        imagesHTML += `</div>`;

        explorer.innerHTML = imagesHTML;
    }
}

function openImage(src) {
    const modal = document.getElementById("imageModal");
    const img = document.getElementById("modalImg");

    img.src = src;

    // ทำให้ modal แสดง
    modal.classList.remove("invisible");

    setTimeout(() => {
        modal.classList.remove("bg-black/0", "opacity-0");
        modal.classList.add("bg-black/80", "opacity-100");

        img.classList.remove("scale-75", "opacity-0");
        img.classList.add("scale-100", "opacity-100");
    }, 10);
}

document.getElementById("imageModal").onclick = function () {
    const modal = this;
    const img = document.getElementById("modalImg");

    modal.classList.remove("bg-black/80", "opacity-100");
    modal.classList.add("bg-black/0", "opacity-0");

    img.classList.remove("scale-100", "opacity-100");
    img.classList.add("scale-75", "opacity-0");

    setTimeout(() => {
        modal.classList.add("invisible");
    }, 500);
};


render();
