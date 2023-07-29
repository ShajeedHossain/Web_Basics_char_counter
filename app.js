const textareaElem = document.getElementById("textarea");
const totalcounterElem = document.getElementById("total-counter");
const remainingcounterElem=document.getElementById("remaining-counter")

textareaElem.addEventListener("keyup", ()=>{
    updateCounter();
})

updateCounter();

function updateCounter(){
    totalcounterElem.innerText=textareaElem.value.length;
    remainingcounterElem.innerText=textareaElem.getAttribute("maxLength")-textareaElem.value.length;

}