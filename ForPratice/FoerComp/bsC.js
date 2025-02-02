const color1 = document.getElementById('input1');
const color2 = document.getElementById('input2');
const color3 = document.getElementById('input3');


function backgrounColor1(){

    const color1F = color1.value;
    const color2F = color2.value;
    const color3F = color3.value;

    document.body.style.backgroundColor = `rgb(${color1F}, ${color2F}, ${color3F})`;
}

color1.addEventListener(`input`, backgrounColor1);
color2.addEventListener(`input`, backgrounColor1);
color3.addEventListener(`input`, backgrounColor1);