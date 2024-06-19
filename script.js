const navMenu = document.getElementById("nav-menu"),
navToggle = document.getElementById("nav-toggle"),
navClose = document.getElementById("nav-close")

if(navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu")
    })
}

if(navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu")
    })
}


const navLink = document.querySelectorAll('.nav-link')

const linkAction = ()=> {
    const navMenu = document.getElementById("nav-menu")
    navMenu.classList.remove("show-menu")
}

navLink.forEach(n => n.addEventListener("click", linkAction))



const blurHeader = ()=> {
    const header = document.getElementById("header")
    this.scrollY >= 50 ? header.classList.add("blur-header") 
                       : header.classList.remoce("blur-header")
}

window.addEventListener("scroll", blurHeader)


const contactForm = document.getElementById("contact-form"),
contactMessage =document.getElementById("contact-message")

const sendEmail = (e) => {
    e.preventDefault()

    // service / template / form / publickey

    emailjs.sendForm("service_ce3busi","template_q17t5jw","#contact-form","m2bnzNZeDdOV95Bd3")
    .then( () => {

        // show sent messages
        contactMessage.textContent = "Message sent Successfully"

        // remove message after five seconds
        setTimeout( () => {
            contactMessage.textContent = ""
        }, 5000)

        //clear input fields
        contactForm.reset() 
    }, 
    () => {
        //show error message
        contactMessage.textContent = "messege not sent (service error)"
    })
}

contactForm.addEventListener("submit", sendEmail)


const scrollUp = () => {
    const scrollUp = document.getElementById("scroll-up")

    //when the scroll is higher than 35o view point

    this.scrollY >= 350 ? scrollUp.classList.add("show-scroll")
                        : scrollUp.classList.remove("show-scroll")
}

window.addEventListener("scroll", scrollUp)


const sections = document.querySelectorAll("section[id]");

const navLinks = document.querySelectorAll(".nav-menu a");

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop + -300;
    const sectionId = current.getAttribute("id");

    navLinks.forEach(link => {
      if (link.href.includes(sectionId)) {
        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
          link.classList.add("active-link");
        } else {
          link.classList.remove("active-link");
        }
      }
    });
  });
}

window.addEventListener("scroll", scrollActive);


const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
 // reset: true // animation repeat
})

sr.reveal(`.home-data`)
sr.reveal(`.home-img`, {delay: 600})