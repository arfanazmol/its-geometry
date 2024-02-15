function calculatePentagonArea(){
 const perimeter = getInputValueById('pentagon_perimeter');
 const apothem = getInputValueById('pentagon_apothem');
 const area = 0.5 * perimeter * apothem;
 setInnerTextById('pentagon-area', area);
}

function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}

function setInnerTextByid(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}

