function calculateRectangleArea(){
const lengthInput = document.getElementById('rectangle_length');
const lengthText = lengthInput.value;
const length = parseFloat(lengthText)
console.log(length);


// get width of the  rectangle
const widthInput = document.getElementById('rectangle_width');
const widthText = widthInput.value;
const width = parseFloat(widthText)
console.log(widthText);

//calculate recangle area
const area = length * width;
console.log('jibone valo vabe kono kisu shikini:',area);


// display rectangle area
const rectangleSpanArea = document.getElementById('rectangle_area');
rectangleSpanArea.innerText = area;
}

  