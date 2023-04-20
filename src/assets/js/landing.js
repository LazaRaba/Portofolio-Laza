
//---------------------------Preload test-------------------------------------


//Sélectionnez le loader et la barre de progression
const loader = document.getElementById('custom-loader');
const loaderBar = document.getElementById('loader-bar');
const loaderText = document.getElementById('loader-text');

// Créer une instance de la timeline GSAP
const tl = gsap.timeline();

// Fonction pour mettre à jour la barre de progression
function updateLoader(progress) {
    loaderBar.style.width = `${progress}%`;
    loaderBar.querySelector('#loader-percentage').textContent = `${progress}%`;
}

// Simulez un chargement de 0 à 100% en utilisant une boucle setTimeout
let progress = 0;
const interval = setInterval(() => {
    progress += 1;
    updateLoader(progress);
    if (progress >= 100) {
        clearInterval(interval);
        // Ajouter la classe "loaded" une fois que le chargement est terminé
        loader.classList.add('loaded');
        // appeler la fonction hideLoader pour animer d'autres éléments une fois que le chargement est terminé
        hideLoader();
    }
}, 40);
    function hideLoader() {
        // Ajouter un délai pour permettre à l'animation de terminer avant d'ouvrir l'écran
        setTimeout(() => {
            // Animer l'élément h1 avec GSAP
            tl.from(loaderText, {
                duration:1.2,
                opacity: 0,
                yPercent: 6200,
            })
                .to(loaderBar, {
                    opacity: 0,
                    display: 'none'
                })
                .to(loaderText, { opacity: 0 })

                // Cacher le loader
                .to(loader, { opacity: 0, display: 'none'})
                
                
                // //  Animer les éléments container
                .from(" .first-block", {
                    duration: 1,
                    xPercent: -100,
                    ease: "sine.out",
                    stagger: {
                        amount: 0.2,
                    },
                }, "-=1")

                // //  Animer les éléments homepage
                .from(" .image img", {
                    duration: 1,
                    delay: 0.7,
                    opacity: 0,
                    // xPercent: 100,
                    scale:5,
                    ease: "sine.out",
                    stagger: {
                        amount: 2,
                    },
                }, "-=1.5")

                .from(" .competence, .contact, .social, .logo, .textBot ", {
                    duration: 1.2,
                    opacity: 0,
                    delay: 0.8,
                    yPercent: 100,
                    ease: "sine.out",
                }, "-=1.5")


                .from(" .textBot h2", {
                    duration: 1,
                    opacity: 0,
                    delay: 0.8,
                    y: 120,
                    ease: "sine.out",
                }, "-=2")

                .from(" .text-image h1", {
                    duration: 1,
                    opacity: 0,
                    delay: 0.8,
                    y: -120,
                    ease: "sine.out",
                }, "-=2")
            
        }, 600);
    }




//-------------------------Anim text---------------------------------------


//------------------------------Parallax----------------------------------//
gsap.registerPlugin(ScrollTrigger);

let homepageTrigger = gsap.timeline({
    scrollTrigger: {
        trigger: '.container',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
        toggleActions: 'restart none none none',
    }
});
homepageTrigger
    .to('.textBot', {opacity: 0, yPercent:100,ease: "sine.out"}, 0)
    .to('.textBot h2', {opacity: 0, y:100, delay:1}, 0)
    .to('.text-image h1',2, {opacity: 0, scale:5}, 0)
    // .to('.text-image h1',2, {opacity: 0, y:-500}, 0)
    .to('.competence',1.8, { yPercent:100,delay:0.2,ease:"Power4.out"}, 0)
    .to('.contact, .social',1.8, { yPercent:100,delay:0.,ease:"Power4.out"}, 0)
    .to('.image img', {duration:1, xPercent:110, ease: "Power4.out",delay:0.1}, 0)
    .to('.logo',1.8, { yPercent:100,delay:0.2,ease:"Power4.out"}, 0);

