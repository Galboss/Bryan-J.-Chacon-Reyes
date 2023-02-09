const observer = new IntersectionObserver(elements=>
    elements.forEach(e=>e.target.classList.toggle('show', e.isIntersecting))
);

const burger = document.querySelector(".burger");
const navList = document.querySelector(".nav-list");

const fullJava=document.getElementById("full-java");
const fullNode=document.getElementById("full-node");
const fullMobile=document.getElementById("full-mobile");
const cardDescriptor = document.getElementById("descriptor");
const cardDescriptorContainer = document.querySelectorAll(".card-descriptor");
const sections = document.querySelectorAll(".hidden");
sections.forEach(el=>observer.observe(el));


burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    navList.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n=>n.addEventListener("click",()=>{
    burger.classList.remove("active");
    navList.classList.remove("active");
}));

fullJava.addEventListener("mouseover",()=>{
    cardDescriptor.innerHTML=`<strong>Java Stack:</strong> this is my regular stack for developing applications of any type. 
    I have the ability to create relational databases with store procedures and functions, then create the middleware
    that connects the database with logic of the project using Java. And finally I can create user interfaces for those
    applications. If the application requires a <strong>desktop interface</strong> I can use Java to develop the interface, or if
    the applications requires a <strong>web interface</strong>, I can design a complete web page to control all the application via web
    creating a modern UI and consuming <strong>RESTful APIs</strong>.`;
});

fullNode.addEventListener("mouseover",()=>{
    cardDescriptor.innerHTML=`<strong>Node JS stack:</strong> This is my favorite stack for developing <strong>web applications</strong>.
    I can complete develop all the logic of project using JavaScript, the connection with the <strong>relational</strong> and <strong>non-relational</strong> database. 
    I can create <strong>RESTful end-points</strong> to get de data that is stored on the database. Then I can use React to create
    the <strong>Front-End</strong> of the application or simply use vanilla Javascript <strong>ES6</strong>.`
});

fullMobile.addEventListener("mouseover",()=>{
    cardDescriptor.innerHTML=`<strong>Android:</strong> I can create android applications with native code using 
    <strong>Kotlin</strong> or <strong>Java</strong> languages. With help of <strong>Retrofit2</strong>
    I can consume <strong>Restful APIs</strong> and get any kind of data to manipulate it on an <strong>Android device</strong>.`
});

