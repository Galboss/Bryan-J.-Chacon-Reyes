const observer = new IntersectionObserver(elements =>
    elements.forEach(e => e.target.classList.toggle('show', e.isIntersecting))
);

const imgObserver = new IntersectionObserver(imgs=>{
    imgs.forEach((img)=>{
        if(img.isIntersecting){
            preloadImg(img.target);
            imgObserver.unobserve(img.target);
        }else
            return;
    });
});

const navList = document.querySelector(".nav-list");
const burger = document.querySelector(".burger");
const sections = document.querySelectorAll(".hidden");
const themeSwitch = document.getElementById("dark-theme");
const imgs = document.querySelectorAll("[data-src]");
const lang = document.documentElement.lang;
sections.forEach(el => observer.observe(el));
imgs.forEach(img=>imgObserver.observe(img));

const fullJava = document.getElementById("full-java");
const fullNode = document.getElementById("full-node");
const fullMobile = document.getElementById("full-mobile");
const cardDescriptor = document.getElementById("descriptor");

const styles = getComputedStyle(document.documentElement);
const bgLight = styles.getPropertyValue('--bg-light');
const bgDark = styles.getPropertyValue('--bg-dark');
const txtLight = styles.getPropertyValue('--txt-light');
const txtDark = styles.getPropertyValue('--txt-dark');

function preloadImg(img){
    const dataSrc = img.getAttribute('data-src');
    if(dataSrc)
        img.src= dataSrc;
    else return; 
}

burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    navList.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    burger.classList.remove("active");
    navList.classList.remove("active");
}));

fullJava.addEventListener("mouseover", () => {
    if (lang == "en")
        cardDescriptor.innerHTML = `<strong>Java Stack:</strong> this is my regular stack for developing applications of any type. 
        I have the ability to create relational databases with store procedures and functions, then create the middleware
        that connects the database with logic of the project using Java. And finally I can create user interfaces for those
        applications. If the application requires a <strong>desktop interface</strong> I can use Java to develop the interface, or if
        the applications requires a <strong>web interface</strong>, I can design a complete web page to control all the application via web
        creating a modern UI and consuming <strong>RESTful APIs</strong>.`;
    else
        cardDescriptor.innerHTML = `<strong>Java Stack:</strong> esta es mi stack regular para desarrollar aplicaciones de cualquier tipo.
        Tengo la capacidad de crear bases de datos relacionales con procedimientos y funciones almacenadas, luego crear el middleware
        que conecta la base de datos con la lógica del proyecto utilizando Java. Y finalmente, puedo crear interfaces de usuario para esas
        aplicaciones. Si la aplicación requiere una <strong>interfaz de escritorio</strong>, puedo usar Java para desarrollar la interfaz, o si
        la aplicación requiere una <strong>interfaz web</strong>, puedo diseñar una página web completa para controlar toda la aplicación a través de la web
        creando una IU moderna y consumiendo <strong>APIs RESTful</strong>.`

});

fullNode.addEventListener("mouseover", () => {
    if (lang == "en")
        cardDescriptor.innerHTML = `<strong>Node JS Stack:</strong> This is my favorite stack for developing <strong>web applications</strong>.
        I can complete develop all the logic of project using JavaScript, the connection with the <strong>relational</strong> and <strong>non-relational</strong> database. 
        I can create <strong>RESTful end-points</strong> to get de data that is stored on the database. Then I can use React to create
        the <strong>Front-End</strong> of the application or simply use vanilla Javascript <strong>ES6</strong>.`
    else
        cardDescriptor.innerHTML = `<strong>Node JS Stack:</strong> Esta es mi stack favorito para desarrollar <strong>aplicaciones web</strong>.
        Puedo desarrollar completamente toda la lógica del proyecto usando JavaScript, la conexión con la <strong>base de datos relacional</strong> y <strong>no relacional</strong>.
        Puedo crear <strong>puntos finales RESTful</strong> para obtener los datos almacenados en la base de datos. Luego puedo usar React para crear
        el <strong>Front-End</strong> de la aplicación o simplemente usar JavaScript sin envoltorio <strong>ES6</strong>.`
});

fullMobile.addEventListener("mouseover", () => {
    if(lang=="en")
        cardDescriptor.innerHTML = `<strong>Android:</strong> I can create android applications with native code using 
        <strong>Kotlin</strong> or <strong>Java</strong> languages. With help of <strong>Retrofit2</strong>
        I can consume <strong>Restful APIs</strong> and get any kind of data to manipulate it on an <strong>Android device</strong>.`
    else
        cardDescriptor.innerHTML= `<strong>Android:</strong> Puedo crear aplicaciones android con código nativo utilizando
        <strong>Kotlin</strong> o <strong>Java</strong> idiomas. Con la ayuda de <strong>Retrofit2</strong>
        puedo consumir <strong>APIs RESTful</strong> y obtener cualquier tipo de datos para manipularlos en un <strong>dispositivo Android</strong>`
});

themeSwitch.addEventListener("change", () => {
    let st = document.documentElement.style
    if (themeSwitch.checked) {
        st.setProperty('--background-color', bgLight);
        st.setProperty('--text-color', txtLight);
        st.setProperty('--filter-img', "0%");
    } else {
        st.setProperty('--background-color', bgDark);
        st.setProperty('--text-color', txtDark);
        st.setProperty('--filter-img', "100%");
    }
})