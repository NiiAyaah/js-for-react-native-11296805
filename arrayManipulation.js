function formatArrayStrings(strings, numbers) {

    const formattedStrings = strings.map((str, index) => {
        if (numbers[index] % 2 === 0) {
            
            return str.toUpperCase();
        } else {
            
            return str.toLowerCase();
        }
    });

    return formattedStrings;
}
