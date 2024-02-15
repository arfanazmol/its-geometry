// function calculateParallelogramArea(){
// const ParallelogramInput = document.getElementById('peralal_area');
// const ParallelogramText = ParallelogramInput.value;
// const base = parseFloat(ParallelogramText);
// console.log(base)


// //get width of the parallelogram :
// const widthInput = document.getElementById('peralal_width');
// const widthText = widthInput.value;
// const width = parseFloat(widthText);
// console.log(width);


// //calculate parallelogram area:
// const area = base * width;
// console.log(area,'takai kachhi biriyani khabo');


// //display parallelogram area;
// }

//__________________________________others type _____________________________________________//

function calculateParallelogramArea(){

    const base = getInputValueById('peralal_area');
    // console.log('base value', base);

const height = getInputValueById('peralal_height');
const area = base * height;
console.log('area of the parallelogram is', area);

setInnerTextById('parallelogram-area', area);
}

function getInputValueById(inputFieldId){
    const inputField =document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const inputValue = parseFloat(inputValueText);    
    // console.log(inputValue);
    return inputValue;
}

function setInnerTextById(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}