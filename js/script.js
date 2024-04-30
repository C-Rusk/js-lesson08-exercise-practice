var stuff = [
  "cars",
  "blankets",
  "sunflowers",
  "sky",
  "yellow",
  "code",
  "perfume",
  "coffee",
  "books",
];

//stuff.forEach(function (item, index) {
//if (index % 2 === 0) {
//console.log(item);
//}
//});

//var removeItem = function (array, item) {
//var index = array.indexOf(item);

//if (index === -1) {
//console.log(`No such element exists in the array`);
//} else {
// array.splice(index, 1);
// console.log(`Removing $(item)`);
// }
//};

//removeItem(stuff, "code");
//console.log(stuff);
//removeItem(stuff, "tea");
//console.log(stuff);

var newArray = [];
for (var item of stuff) {
  if (item.includes("s")) {
    newArray.push(item);
  }
}

console.log(newArray);
