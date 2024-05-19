function processArray(numbers) {
    const processedArray = numbers.map(num => {
        if (num % 2 === 0) {
            return num * num;
        } else {
            return num * 3;
        }
    });
    return processedArray;
}