const botones = document.querySelectorAll(".btn");
const slides = document.querySelectorAll(".slide");
const secHab = document.querySelectorAll(".hab-dis");
const parrafos = document.querySelectorAll(".parra-sobremi");
const contSlider = document.querySelector(".cont-slider");
const slibtn = document.querySelectorAll(".img-sli");
const form = document.querySelector(".form-btn");
const btnmenu = document.querySelector(".nav-img");
const pestmob = document.querySelector(".cont-pest");
let ofset = 0;
let pausa = "false"
let intervalocambio = setInterval(function(){
    if(pausa == "false"){cambioauto()}},5000)

function cambioauto(){
        ofset++;
        if(ofset >= slides.length){
            ofset=0;
            cambslide();
        } else{
            cambslide();
        }
    
}

const showhab = (entradas,observador)=>{
    entradas.forEach((entrada)=>{
        if(entrada.isIntersecting){
            entrada.target.classList.add("show")
        } else{
            entrada.target.classList.remove("show")
        }
    })
}

const observador = new IntersectionObserver(showhab, {
    root:null,
    rootMargin: `0px`,
    threshold: 0.7
})


botones.forEach((e)=>{
    e.addEventListener("click",()=>{   
        if(e.classList.contains("next")){
            ofset ++
            if (ofset >= slides.length){
                ofset = 0
                cambslide()
                } cambslide()
        } else {
            ofset--;
                if(ofset < 0){
                ofset = 3
                cambslide()
                } cambslide()
                
        }       
    })
})

function cambslide(){
    slides.forEach( (Element)=>{
        Element.classList.remove("activo")
    })
    slides[ofset].classList.add("activo")
}

secHab.forEach((ele)=> observador.observe(ele));
parrafos.forEach((ele)=>observador.observe(ele));

 contSlider.addEventListener("mouseenter",()=>{
    pausa = "true"
 })

 contSlider.addEventListener("mouseout",()=>{
    pausa = "false"
 })

 slibtn.forEach((flechain)=>{
    flechain.addEventListener("mouseenter",()=>{
        pausa = "true"
    })
 })

 slibtn.forEach((flechaout)=>{
    flechaout.addEventListener("mouseout",()=>{
        pausa = "false"
    })
 })

 form.addEventListener("submit", function(even){
    even.preventDefault()
    console.log("hola")
 })

 btnmenu.addEventListener("click",()=>{
    pestmob.classList.toggle("off")
    btnmenu.classList.toggle("menuon")
 })