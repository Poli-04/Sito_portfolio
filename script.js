// cambio lingua

const languageSwitch = document.getElementById("language-switch");
const langEN = document.getElementById("lang-en");
const langIT = document.getElementById("lang-it");

// Recupera la lingua salvata.
// Se non esiste ancora, usa inglese.
let currentLanguage = localStorage.getItem("language") || "en";


function changeLanguage(language) {

    // Seleziona tutti gli elementi che hanno entrambe le lingue
    const elements = document.querySelectorAll("[data-en][data-it]");

    elements.forEach(function(element) {

        // Prende il testo della lingua selezionata
        const text = element.getAttribute("data-" + language);

        // Sostituisce eventuali "|" con un vero <br>
        element.innerHTML = text.replace(/\|/g, "<br>");

    });

    // Aggiorna la lingua dell'HTML
    document.documentElement.lang = language;

    // Salva la lingua scelta
    localStorage.setItem("language", language);

    // Aggiorna il colore della lingua attiva
    if (langEN && langIT) {

        if (language === "en") {

            langEN.classList.add("active-language");
            langIT.classList.remove("active-language");

        } else {

            langIT.classList.add("active-language");
            langEN.classList.remove("active-language");

        }
    }
}


// ================================
// APPLICA LA LINGUA SALVATA
// ================================

changeLanguage(currentLanguage);


// ================================
// CAMBIO LINGUA AL CLICK
// ================================

if (languageSwitch) {

    languageSwitch.addEventListener("click", function () {

        if (currentLanguage === "en") {
            currentLanguage = "it";
        } else {
            currentLanguage = "en";
        }

        changeLanguage(currentLanguage);

    });

}



//frecce pagina iniziale
const track = document.querySelector(".works-track");

const prevButton = document.querySelector(".gallery-prev");
const nextButton = document.querySelector(".gallery-next");

const card = document.querySelector(".work_moving");

const scrollAmount = card.offsetWidth + 30;


// NEXT
nextButton.addEventListener("click", function () {

    const maxScroll = track.scrollWidth - track.clientWidth;

    if (track.scrollLeft >= maxScroll - 5) {

        // torna all'inizio
        track.scrollTo({
            left: 0,
            behavior: "smooth"
        });

    } else {

        track.scrollBy({
            left: scrollAmount,
            behavior: "smooth"
        });

    }

});


// PREV
prevButton.addEventListener("click", function () {

    if (track.scrollLeft <= 5) {

        // vai alla fine
        track.scrollTo({
            left: track.scrollWidth - track.clientWidth,
            behavior: "smooth"
        });

    } else {

        track.scrollBy({
            left: -scrollAmount,
            behavior: "smooth"
        });

    }

});


//per far scorrere i titoli
const sections = document.querySelectorAll(
    "#about, #work_showreel, #contacts"
);

const titlesObserver = new IntersectionObserver(
    function(entries) {

        entries.forEach(function(entry) {

            const title = entry.target.querySelector(".title");

            if (!title) return;

            if (entry.isIntersecting) {
                title.classList.add("title-visible");
            } else {
                title.classList.remove("title-visible");
            }

        });

    },
    {
        threshold: 0.25
    }
);

document.addEventListener("DOMContentLoaded", function() {

    sections.forEach(function(section) {
    titlesObserver.observe(section);
});

// Per far scorrere i subtitle
const subtitles = document.querySelectorAll(".subtitle");

const subtitlesObserver = new IntersectionObserver(
    function(entries) {

        entries.forEach(function(entry) {

            if (entry.isIntersecting) {
                entry.target.classList.add("subtitle-visible");
            } else {
                entry.target.classList.remove("subtitle-visible");
            }

        });

    },
    {
        threshold: 0.25
    }
);

subtitles.forEach(function(subtitle) {
    subtitlesObserver.observe(subtitle);
});

});










