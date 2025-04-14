const removeFromArray = function(inArray, ...removeItems) {
    for (let i = 0; i < removeItems.length; i++) {
        let index = 0; 
        while (index < inArray.length) {
            if (inArray[index] === removeItems[i]) {
                inArray.splice(index, 1);
            } else {
                index++;
            }
        }
    }

    return inArray;
};

// Do not edit below this line
module.exports = removeFromArray;
