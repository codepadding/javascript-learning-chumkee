const button  = document.getElementById("call");
const wrapper = document.getElementById("wrapper");

const getRendomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


const createDiv = () => {
    const div = document.createElement("div");
    div.style.width = "100px";
    div.style.height = "100px";
    div.style.backgroundColor = getRendomColor();
    div.style.margin = "10px";
    return div;
}


// click event
// mouseover event
// mouseout event
// mousemove event
// mousedown event
// mouseup event
// wheel event
// keydown event
// keyup event
// keypress event
// focus event
// blur event
// change event
// submit event
// load event
// resize event
// scroll event
// copy event
// cut event
// paste event
// contextmenu event
// dblclick event
// drag event
// dragend event
// dragenter event
// dragleave event
// dragover event
// dragstart event
// drop event

const scrollToBottom = () => {
    wrapper.scrollIntoView({
        behavior: "smooth",
        block: "end"
    });
}

button.addEventListener("click",()=>{
   const div = createDiv()
   wrapper.appendChild(div);
   scrollToBottom()
});



const input = document.getElementById("name");
input.addEventListener("keypress",()=>{
    console.log(input.value);
})


setInterval(()=>{
    button.click()
},500)