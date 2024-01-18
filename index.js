let hoverPar=document.querySelector('#hoverPar')
let bgpar=document.querySelector('#bgpar')
let logo=document.querySelector('#logo')
console.log(bgpar)

window.addEventListener("scroll",()=>{
    let value=window.scrollY;
    console.log(value)
    hoverPar.style.display="block"
    hoverPar.style.left=`${-value*0.2}vw`
    hoverPar.style.top=`${value*0.06}vw`
    hoverPar.style.width=`${value*0.15}vw`

    bgpar.style.webkitFilter='blur('+(value*0.08)+'px)'
    logo.style.top=`${-value*0.15}vw`

    // logo.style.position="fixed"

})