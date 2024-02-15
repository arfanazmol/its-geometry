function calculateEllipseArea(){
    const majorRadius = getInputValueById('ellipse_mejor_radius');
    const minorRadius = getInputValueById('ellipse_minor_radius');
    const area = 3.14 * majorRadius * minorRadius;
    setInnerTextByid('ellipse_area', area);
}