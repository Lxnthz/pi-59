// SPLASH SCREEN
let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo')

window.addEventListener('DOMContentLoaded', ()=>{

    setTimeout(()=> {
        
        logoSpan.forEach((span, idx) => {
            setTimeout(() => {
                span.classList.add('active');
            }, (idx + 1) * 200)
        });

        setTimeout(() => {
            logoSpan.forEach((span, idx) => {
                
                setTimeout(() => {
                    span.classList.remove('active');
                    span.classList.add('fade');
                })
            })
        }, 2000)

        setTimeout(() => {
           intro.style.top = '-100vh'
        }, 2300);

    })
})





// TYPING ANIMATION
// function typeWriter(textElement, text, speed) {
//     let charIndex = 0;
//     const typingInterval = setInterval(() => {
//         const currentText = text.substring(0, charIndex);
//         textElement.innerHTML = currentText;
//         charIndex++;
//         if (charIndex > text.length) {
//             clearInterval(typingInterval);
//         }
//     }, speed);
// }

// document.addEventListener("DOMContentLoaded", function() {

//     function startTyping() {
//         const textElement = document.getElementById("typing-text");
//         const text = textElement.innerText;
//         const speed = 15;
    
//         textElement.innerText = "";
    
//         typeWriter(textElement, text, speed);    
//     }
//     setTimeout(startTyping, 4500);
// });

