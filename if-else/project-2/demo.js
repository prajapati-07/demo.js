const select=document.querySelector("select");
const html=document.querySelector("html");
document.body.style.padding="10px";

function update(BGcolor,textColor){
    html.style.backgroundColor=BGcolor
    html.style.color=textColor;
}
select.addEventListener("change",()=>select.value==="Black"?
update("Black","White"):
update("White","Black")
);