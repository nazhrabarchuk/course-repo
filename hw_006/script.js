// #1
function getLastElementArr(arr) {
    return arr[arr.length - 1];
}

// #2
function joinElements(arr) {
    return arr.join();
}

// #3
function sumArr(arr, arr2) {
    const maxLength = Math.max(arr.length, arr2.length);
    let result = [];
    for (let i = 0; i < maxLength; i++) {
        result.push((arr[i] ? arr[i] : 0) + (arr2[i] ? arr2[i] : 0));
    }
    return result;
}

// #4
const rectangle = (width, height) => {
    return {
        width: width,
        height: height,
        getArea() {
            return `The area of this rectangle: ${this.width * this.height}`;
        },
        getPerimeter() {
            return `The perimeter of this rectangle: ${2 * (this.width + this.height)}`;
        }
    }
}
