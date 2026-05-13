const navbar = document.getElementById("navbar");
window.addEventListener("scroll", function(){
    if(window.scrollY > 50){
        navbar.style.background = "#020617";
    }
    else{
        navbar.style.background = "rgba(15,23,42,0.9)";
    }
});


const text = [
    "Python Developer",
    "DevOps Enthusiast",
    "Cybersecurity Learner"
];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";
(function type(){
    if(count === text.length){
        count = 0;
    }
    currentText = text[count];
    letter = currentText.slice(0, ++index);
    document.getElementById("typing-text").textContent = letter;
    if(letter.length === currentText.length){
        count++;
        index = 0;
        setTimeout(type, 1000);
    }
    else{
        setTimeout(type, 100);
    }
})();



const hiddenElements = document.querySelectorAll(".hidden");
window.addEventListener("scroll", function(){
    hiddenElements.forEach(function(el){
        const position = el.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        if(position < screenPosition){
            el.classList.add("show");
        }
    });
});


window.dispatchEvent(new Event("scroll"));