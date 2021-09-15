let obj = {name: "Atharva", age: 22 }
console.log("This is original Object" + "\n" + obj.name);
let copyObj = Object.assign({}, obj);
console.log("This is the copy of original Object" + "\n" + copyObj.name);