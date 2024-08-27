
document.addEventListener('click', e =>{
    if(e.target.classList.contains("dropdown-button")) {
        e.target.nextElementSibling.classList.toggle("visible");
    }
})