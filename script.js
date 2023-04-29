const columns = document.querySelector(".columns");
const preShare = document.querySelector(".pre-share");
const posShare = document.querySelector(".pos-share");

columns.addEventListener("click", () => {
    const shareIcon = document.querySelector("#share-icon");
    if(window.innerWidth < 768) {
        shareIcon.classList.remove("hidden");
        if (preShare.classList.contains("hidden")) {
            preShare.classList.remove("hidden");
            posShare.classList.add("hidden");
        } else {
            preShare.classList.add("hidden");
            posShare.classList.remove("hidden");
        }
    } else {
        shareIcon.classList.add("hidden");
        posShare.classList.toggle("hidden");
    }
});