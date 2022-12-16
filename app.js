let imgBox = document.getElementById("imgBox");
let boxes = document.querySelectorAll(".box");


imgBox.addEventListener('dragstart',(e) => {
    console.log('drag start');
    setTimeout(()=>{
        e.target.className = 'hide';
    },0)
})

imgBox.addEventListener("dragend", (e) => {
  e.target.className = 'imgBox';
});

boxes.forEach((box) => {
    box.addEventListener('dragover', (e) =>{
        e.preventDefault();
    });
    box.addEventListener("drop", (e) => {
        e.target.append(imgBox);
    });
})