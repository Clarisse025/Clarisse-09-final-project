let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar')
let sections= document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll= () =>{
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute(id);

        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a [href*='+id +']').classList.add('active');

            })
        }

    })
}
menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

document.addEventListener("DOMContentLoaded", () => {
    const titles = document.querySelectorAll(".skills-info h4");

    titles.forEach(title => {
        const text = title.textContent.trim(); 
        title.textContent = ""; 

        const spans = text.split("").map((letter) => {
            const span = document.createElement("span");
            span.textContent = letter === " " ? "\u00A0" : letter;
            span.style.display = "inline-block"; 
            span.style.transition = "transform 0.3s ease";
            title.appendChild(span);
            return span;
        });

       
        function animateLetters() {
            spans.forEach((span, index) => {
                setTimeout(() => {
                    span.style.transform = "translateY(-10px)";
                    setTimeout(() => {
                        span.style.transform = "translateY(0)";
                    }, 300); 
                }, index * 150); 
            });
        }

  
        animateLetters();
       
        setInterval(animateLetters, 3000);
    });
});

