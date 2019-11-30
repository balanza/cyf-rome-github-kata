function squareArea(side) {
    return side * side;
} 

function circleArea(radius){
    return radius * radius * Math.PI;
}

function triangleArea(base, height) {
    return base * height / 2;
}

module.exports = {
    squareArea,
    circleArea,
};
