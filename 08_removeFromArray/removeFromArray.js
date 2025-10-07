const removeFromArray = function(array, ...numbers) {
    let index = 0;

    // const args = Array.from(numbers);

    numbers.forEach(number_element => {
        array = array.filter(array_item => array_item !== number_element);

        // index = array.indexOf(number_element);

        // array.splice(index, 1);
    });

    return array;
};

// const remove = removeFromArray([1,2,3,4], 3, 2);
// console.log(remove);

// Do not edit below this line
module.exports = removeFromArray;
