document.addEventListener("DOMContentLoaded", function() {
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Add fade-in class to elements you want to have the effect
    var fadeElements = document.querySelectorAll('.fade-in');

    function handleIntersection(entries, observer) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }

    // Set up Intersection Observer
    var observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });

    // Observe each element with the fade-in class
    fadeElements.forEach(function (element) {
        observer.observe(element);
    });
});
document.addEventListener('scroll', function () {
    var scrollPosition = window.scrollY;
    var skillsContainer = document.getElementById('skills');
    var languagesContainer = document.getElementById('Languages');
    var skillsContainerOffset = skillsContainer.offsetTop;
    var languagesContainerOffset = languagesContainer.offsetTop;

    if (scrollPosition > skillsContainerOffset - window.innerHeight) {
        skillsContainer.classList.add('show');
    }

    if (scrollPosition > languagesContainerOffset - window.innerHeight) {
        languagesContainer.classList.add('show');
    }
});
document.addEventListener("DOMContentLoaded", function() {
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    
    var header = document.getElementById("header");
    var sticky = header.offsetTop;

    window.onscroll = function() {
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    };
});
document.addEventListener('DOMContentLoaded', function () {
    var downloadCheckbox = document.getElementById('downloadCheckbox');
    var downloadBtn = document.getElementById('downloadBtn');

    downloadBtn.addEventListener('transitionend', function (event) {
        if (event.propertyName === 'height' && downloadCheckbox.checked) {
            
            var link = document.createElement('a');
            link.href = 'img/CV stage.pdf'; 
            link.download = 'Yassin CV.pdf'; 
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    });
});
