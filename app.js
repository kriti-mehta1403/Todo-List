let inp=document.querySelector("input");
let btn=document.querySelector("button");
let list=document.querySelector("ul");
btn.addEventListener("click",function(){
    let items=document.createElement("li");
    items.classList.add("item");
    items.innerText=inp.value;
    list.appendChild(items);

    let delbtn=document.createElement("button");
    delbtn.innerText="Delete";
    delbtn.classList.add("delete");
    items.appendChild(delbtn);
   inp.value="";
});
list.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
        event.target.parentElement.remove();
    }
});
