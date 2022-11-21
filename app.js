let body=document.getElementById("body")


let sehwag=document.getElementById("sehwag")
let sehwagImg=document.getElementById("vs")

sehwag.addEventListener("click",function() {
    sehwagImg.style.display="block"
    sehwagImg.style.transform="translate(0em,-19em)"

    sehwagImg.onmouseleave=()=>{
        sehwagImg.style.display="none"
    }
})

let sachin=document.getElementById("sachin")
let SachinImg=document.getElementById("st")

sachin.addEventListener("click",function() {
    SachinImg.style.display="block"
    SachinImg.style.transform="translate(0em,-17em)"

    SachinImg.onmouseleave=()=>{
        SachinImg.style.display="none"
    }
})

let gambhir=document.getElementById("gambhir")
let GambhirImg=document.getElementById("gg")

gambhir.addEventListener("click",function() {
    GambhirImg.style.display="block"
    GambhirImg.style.transform="translate(0em,-15em)"

    GambhirImg.onmouseleave=()=>{
        GambhirImg.style.display="none"
    }
})

let virat=document.getElementById("virat")
let ViratImg=document.getElementById("vk")

virat.addEventListener("click",function() {
    ViratImg.style.display="block"
    ViratImg.style.transform="translate(0em,-13em)"

    ViratImg.onmouseleave=()=>{
        ViratImg.style.display="none"
    }
})


let dhoni=document.getElementById("dhoni")
let dhoniImg=document.getElementById("ms")

dhoni.addEventListener("click",function() {
    console.log("dhoni clicked")
    dhoniImg.style.display="block"
    dhoniImg.style.transform="translate(0em,-11em)"

        dhoniImg.onmouseleave=()=>{
            dhoniImg.style.display="none"
        }
})

let yuvraj=document.getElementById("yuvraj")
let YuvrajImg=document.getElementById("yuvi")

yuvraj.addEventListener("click",function() {
    console.log("dhoni clicked")
    YuvrajImg.style.display="block"
    YuvrajImg.style.transform="translate(0em,-9em)"

    YuvrajImg.onmouseleave=()=>{
        YuvrajImg.style.display="none"
    }
})

let suresh=document.getElementById("suresh")
let SureshImg=document.getElementById("sr")

suresh.addEventListener("click",function() {
    console.log("dhoni clicked")
    SureshImg.style.display="block"
    SureshImg.style.transform="translate(10em,-2em)"

    SureshImg.onmouseleave=()=>{
        SureshImg.style.display="none"
    }
})

let harbajan=document.getElementById("harbajan")
let HarbhajanImg=document.getElementById("harb")

harbajan.addEventListener("click",function(){
    HarbhajanImg.style.display="block"
    HarbhajanImg.style.transform="translate(17em,-2em)"
    HarbhajanImg.onmouseout=()=>{
        HarbhajanImg.style.display="none"
    }
})

let zaheer=document.getElementById("zaheer")
let ZaheerImg=document.getElementById("zk")

zaheer.addEventListener("click",zaheerShow)
// zaheer.onclick=()=>{}

function zaheerShow(){
    ZaheerImg.style.display="block"
    ZaheerImg.style.transform="translate(23em,-2em)"     
        ZaheerImg.onclick=()=>{
            ZaheerImg.style.display="none"
        }
} 
      
let munaf=document.getElementById("munaf")
let MunafImg=document.getElementById("mp")

munaf.addEventListener("click",function(){
    MunafImg.style.display="block"
    MunafImg.style.transform="translate(27em,-2em)"
        MunafImg.onmouseout=()=>{
            MunafImg.style.display="none"
        }
})

let sreesanth=document.getElementById("sreesanth")
let SreesanthImg=document.getElementById("shri")

sreesanth.addEventListener("mouseenter",function(){
    SreesanthImg.style.display="inline"
    SreesanthImg.style.transform="translate(30em,-2em)"

    SreesanthImg.onmouseleave = () => {
        SreesanthImg.style.display="none"
    }
})