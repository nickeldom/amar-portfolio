/* =====================================================
   AMAR M - PREMIUM PORTFOLIO JAVASCRIPT
===================================================== */


/* Smooth page loading */

document.addEventListener("DOMContentLoaded", () => {


    document.body.classList.add("loaded");



    /* Reveal animation */


    const sections = document.querySelectorAll(
        ".hero, .box, .stats div, .vision"
    );


    const observer = new IntersectionObserver(

        entries => {

            entries.forEach(entry => {


                if(entry.isIntersecting){

                    entry.target.classList.add(
                        "show"
                    );

                }


            });

        },

        {
            threshold:0.15
        }

    );



    sections.forEach(section => {

        section.classList.add("hidden");

        observer.observe(section);

    });




    /* Animated counters */


    const counters =
        document.querySelectorAll(
            ".stats h3"
        );


    counters.forEach(counter => {


        const value =
            counter.innerText;



        if(!isNaN(value.replace("+",""))){


            let number = 0;


            const target =
                parseInt(
                    value.replace("+","")
                );



            const speed = 50;



            const updateCounter = () => {


                if(number < target){


                    number++;


                    counter.innerText =
                        number +
                        (value.includes("+")
                        ? "+"
                        : "");



                    setTimeout(
                        updateCounter,
                        speed
                    );


                }


            };


            updateCounter();


        }


    });




});





/* Navbar glass effect */

window.addEventListener(
"scroll",
()=>{


    const navbar =
        document.querySelector(
            ".navbar"
        );



    if(navbar){


        if(window.scrollY > 50){


            navbar.style.background =
            "rgba(2,6,23,.95)";


        }

        else {


            navbar.style.background =
            "rgba(5,5,5,.75)";


        }


    }


});






/* Luxury button hover glow */


document.querySelectorAll(
".btn"
)
.forEach(button => {


    button.addEventListener(
    "mouseenter",
    ()=>{


        button.style.boxShadow =
        "0 20px 50px rgba(212,175,55,.45)";


    });



    button.addEventListener(
    "mouseleave",
    ()=>{


        button.style.boxShadow =
        "none";


    });



});






/* Console branding */

console.log(
`
================================

 AMAR.
 Premium Technology Portfolio

 PHP | Java | JavaScript
 Docker | Linux | Databases

================================
`
);

