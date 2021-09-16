let obj = {name: "Atharva", age: 22 };
document.write("This is original Object\n");
document.write("Name:" + " " + obj.name + "\n" + "Age:" + " " + obj.age);
let copyObj = Object.assign({}, obj);
document.write("\nThis is the copy of original Object\n");
document.write("Name:" + " " + copyObj.name + "\n" + "Age:" + " " + copyObj.age)
console.log("Test");