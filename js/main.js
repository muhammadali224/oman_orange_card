const menuList = document.getElementById("menu-list");
function fixMenuOnScroll() {
    var menu = document.querySelector('.menu');
    var offset = menu.offsetTop;

    window.addEventListener('scroll', function () {
        if (window.pageYOffset >= offset) {
            menu.classList.add('fixed');
        } else {
            menu.classList.remove('fixed');
        }


    });


}

fixMenuOnScroll();


var checkbox = document.getElementById("menu-checkbox");
checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
        menuList.style.display = "flex"
        setTimeout(function () {
            menuList.classList.add("show");
        }, 10);
    } else {

        menuList.style.display = "none"
    }
});

window.addEventListener("scroll", function () {
    var floatSocial = document.querySelector(".float-social");
    var footer = document.querySelector("footer");
    var footerOffset = footer.offsetTop;
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollPosition + window.innerHeight >= footerOffset) {
        floatSocial.style.display = "none";
    } else {
        floatSocial.style.display = "block";
    }
});





const newsContainer = [...document.querySelectorAll(".news-container")];

const nextBtn = [...document.querySelectorAll(".nxt-btn")];
const prevBtn = [...document.querySelectorAll(".pre-btn")];

newsContainer.forEach((item, i) => {

    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nextBtn[i].addEventListener("click", () => {
        item.scrollLeft += containerWidth / 5;
    })
    prevBtn[i].addEventListener("click", () => {
        console.log("left");
        item.scrollLeft -= containerWidth / 5;
    })

})




const language = document.getElementById("lang");
const languageName = document.getElementById("lang-name");
var root = document.documentElement;
//flex-direction


language.addEventListener("click", () => {

    if (language.className === "en") {

        language.className = "ar";
        languageName.textContent = "العربية";
        root.style.setProperty('--text-direction', 'rtl');
        menuList.style.flexDirection = "row-reverse";

    } else {
        language.className = "en";
        languageName.textContent = "English";
        root.style.setProperty('--text-direction', 'ltr');
        menuList.style.flexDirection = "row";

    }
});

