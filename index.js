function squareArea(side) {
    return Math.pow(side, 2);
} 

function circleArea(radius){
    return Math.pow(radius, 2) * Math.PI;
}

function triangleArea(base, height) {
    return base * height / 2;
}

module.exports = {
    squareArea,
    circleArea,
};
