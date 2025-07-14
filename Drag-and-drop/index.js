const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");
const items = document.getElementsByClassName("items");

let dragItems = null

for(let item of items){
    item.addEventListener('dragstart',(e)=>{
       dragItems = item
    })
}
box2.addEventListener('dragover',(e)=>{
    e.preventDefault();
})
box2.addEventListener('drop',()=>{
    if(dragItems){
        box2.append(dragItems)
        dragItems = null;
    }
})

// Allow dropping in box1
box1.addEventListener('dragover',(e)=>{
    e.preventDefault()
})
box1.addEventListener('drop',()=>{
    if(dragItems){
        box1.append(dragItems)
        dragItems = null
    }
})