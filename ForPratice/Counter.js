const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
const increase = document.getElementById("increase");
const countLabel = document.getElementById("countLabel");
let count = 0;


increase.onclick = function(){
    count++;
    countLabel.textContent = count;
    shape.style.borderRadius = `${count}px`;
}

reset.onclick = function(){
    count = 0;
    countLabel.textContent = count;
    shape.style.borderRadius = `${count}px`;
}

decrease.onclick = function(){
    count--;
    countLabel.textContent = count;
    shape.style.borderRadius = `${count}px`;
}