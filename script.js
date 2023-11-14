const body  = document.querySelector("body")
const alert  = document.querySelector(".alert")
const openBtn  = document.querySelector(".open")
const closeBtn  = document.querySelector(".close")


openBtn.addEventListener('click', ()=>{
    body.classList.add("open")
    alert.classList.add("open")
})
closeBtn.addEventListener('click', ()=>{
    body.classList.remove("open")
    alert.classList.remove("open")
})
document.addEventListener('keyup', (e) => {
    if (e.key == "Enter") {
        body.classList.remove("open")
        alert.classList.remove("open")
    }
    else if(e.key == "s"){
        body.classList.add("open")
        alert.classList.add("open")
    }
})
