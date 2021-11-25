const rectangle = [4, 6, 2, 9, 5];

const computeArea = function(length, height) {
    return (length * height);
}

const area = rectangle.map(s => computeArea (s, s));