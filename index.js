//intersection observer for ".hidden-video"
const hiddenVideo = document.querySelector(".hidden-video");
const hiddenVideoOptions = {
    threshold: 1
};
const hiddenVideoObserver = new IntersectionObserver(function (entries, hiddenVideoObserver) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add("show");
            
        }
    });
}
    , hiddenVideoOptions);
hiddenVideoObserver.observe(hiddenVideo);
