let obj = {name: "Atharva", age: 22 };
document.write("This is original Object");
document.write(obj);
let copyObj = Object.assign({}, obj);
document.write("This is the copy of original Object");
document.write(copyObj);