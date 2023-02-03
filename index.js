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


//for all the elements with the class ".highlight-y"make a contact button variable
const highlightY = document.querySelectorAll(".highlight-y");
const highlightP = document.querySelectorAll(".highlight-p");



const contactModal = document.querySelector("#contact");
const main = document.querySelector("main");
//when the contact button is clicked, add the show class to the contact modal and the main section
highlightY.forEach(button => {
    button.addEventListener("click", function () {
        contactModal.classList.add("show");
        main.classList.add("show");
    });
});
highlightP.forEach(button => {
    button.addEventListener("click", function () {
        contactModal.classList.add("show");
        main.classList.add("show");
    });
});






//close the contact modal and remove the show class from the main section when the ".close" button is clicked
const close = document.querySelector(".close");
close.addEventListener("click", function () {
    contactModal.classList.remove("show");
    main.classList.remove("show");
}
);


