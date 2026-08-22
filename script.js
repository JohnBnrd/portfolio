const slogan = document.getElementById("slogan");
const textComplet = "Turning ideas into concrete solutions";
let counter = 0;
let typing = true;

setInterval(function(){
    // Bloc 1 : dois-je taper ou effacer ?
    if (typing === true) {
        counter++;
    } else {
        counter--;
    }

    slogan.textContent = textComplet.slice(0, counter);

    // Bloc 2 : ai-je fini de taper tout le texte ?
    if (counter === textComplet.length) {
        typing = false;
    }

    // Bloc 3 : ai-je fini d'effacer complètement ?
    if (counter === 0) {
        typing = true;
    }
}, 100);