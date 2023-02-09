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
const contactButton = document.querySelector(".contact-button");
const footerButton = document.querySelector(".footer-button");

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
contactButton.addEventListener("click", function () {
    contactModal.classList.add("show");
    main.classList.add("show");
});
footerButton.addEventListener("click", function () {
    contactModal.classList.add("show");
    main.classList.add("show");
});









//close the contact modal and remove the show class from the main section when the ".close" button is clicked
const close = document.querySelector(".close");
close.addEventListener("click", function () {
    contactModal.classList.remove("show");
    main.classList.remove("show");g
}
);


//new intersection observer for all "hidden" elements
const hidden = document.querySelectorAll(".hidden");
const hiddenOptions = {
    threshold: 0.5
};
const hiddenObserver = new IntersectionObserver(function (entries, hiddenObserver) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add("show");
        }
    });
}
    , hiddenOptions);
hidden.forEach(hidden => {
    hiddenObserver.observe(hidden);
}
);


const examples = document.querySelectorAll(".example-video");
let i = 1;
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
//when the next button is clicked, increment i by 1 and add the "display" class to the i'th element
next.addEventListener("click", function () {
    //left slide moves to the middle
    if (i === 0)
       examples[ examples.length - 1].classList.add("display");
    else
        examples[i - 1].classList.add("display");
    //middle slide moves to the right 
    examples[i].classList.add("end");
    examples[i].classList.remove("display");

    //right slide moves to the left
    if (i === examples.length - 1)
        examples[0].classList.remove("end");
    else
        examples[i + 1].classList.remove("end");
    i--;
    if(i < 0){
        i = examples.length - 1;
    }
}
);

//when the prev button is clicked, decrement i by 1 and add the "display" class to the i'th element
prev.addEventListener("click", function () {
    //left slide moves to the right
    if (i === 0)
        examples[examples.length - 1].classList.add("end");
    else
        examples[i - 1].classList.add("end");
    //middle slide moves to the left
    examples[i].classList.remove("display");
    //right slide moves to the middle
    if (i === examples.length - 1) {
        examples[0].classList.remove("end");
        examples[0].classList.add("display");
    }
    else {
        examples[i + 1].classList.remove("end");
        examples[i + 1].classList.add("display");
    }
    i++;
    if (i > examples.length - 1) {
        i = 0;
    }
    }
);



