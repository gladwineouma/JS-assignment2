const arr1 = [3,7,34,90,12];
const newarray = arr1[arr1.length - 1];
console.log({newarray});

const arr2 = [true, "green", "where",12,56];
const newarray2 = arr2[arr2.length - 1];
console.log({newarray2});

const myPets = ["Cow", "Bird", "Snake", "Dog"];
let myNewPets = myPets.toString();
console.log({myNewPets});


var arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
arr3.sort((a, b) => a - b);
console.log({arr3});



let arr = ["boy", "man", "girl", "school", "girl", "woman"];
function removeAndFindDuplicates(arr) {
    let uniqueArr = [...new Set(arr)];
    let duplicatesArr = arr.filter(item => arr.indexOf(item) !== arr.lastIndexOf(item));
    return { uniqueArr, duplicatesArr };
}
let { uniqueArr, duplicatesArr } = removeAndFindDuplicates(arr);
console.log("Array without duplicates:", uniqueArr);
console.log("Array with duplicates:", duplicatesArr);







let arr5 = ["the", "way", "x", 4];
let searchWord = "food";
let result = arr5.includes(searchWord) ? searchWord : "the search word was not found";
console.log(result);



let word = "renniw";
let sortedWord = word.split('').sort().join('');
console.log({sortedWord}); 


const fruits =['mango', 'pawpaw','melon','banana','kiwi','ovacado', 'orange','pears','plum','dates'];
fruits.splice(5, 0, 'Tomato'); 
console.log({fruits});


//Write a program to remove duplicates from the following array. Console the array without duplicates, and console another array that only contains the duplicates
//let arr = ["boy", "man", "girl",  "school", "girl", "woman"];
