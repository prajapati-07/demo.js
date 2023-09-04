const btn=document.querySelector("button");
const txt=document.querySelector("p");
btn.addEventListener("click",updatebtn);
function updatebtn()
{
    if(btn.textContent==="start machine"){
        btn.textContent="stop machine";
        txt.textContent="the machine has started!";
    }
    else{
        btn.textContent="start machine";
        txt.textContent="the machine is stopped";
    }
}