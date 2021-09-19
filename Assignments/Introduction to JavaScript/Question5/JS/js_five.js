let employee = [
    {name:"Atharva", age: 22, salary: 6000, DOB: "28/07/1999"},
    {name:"Bharat", age: 24, salary: 950, DOB: "18/07/1999"},
    {name:"Aayush", age: 19, salary: 9500, DOB: "10/06/2001"},
    {name:"Piyush", age: 18, salary: 5500, DOB: "10/08/2002"},
    {name:"Manan", age: 20, salary: 900, DOB: "12/03/1998"},
    {name:"Nitesh", age: 35, salary: 5000, DOB: "17/02/1999"},
    {name:"Kiran", age: 27, salary: 3000, DOB: "16/09/1993"},
    {name:"Rajeev", age: 28, salary: 9000, DOB: "09/09/1991"},
    {name:"Himanshu", age: 25, salary: 700, DOB: "04/01/1994"},
    {name:"Amit", age: 24, salary: 4000, DOB: "28/05/1995"}
];

console.log(filter_1())
console.log(filter_3())

function filter_1(){
    let salaryArray = employee.map(data => data.salary)
    return salaryArray.filter(salary => salary > 5000)
    
}


let age = employee.reduce((r, a) => {
    r[a.age] = [...(r[a.age] || []), a];
    return r;
}, {});
console.log(age);


function filter_3(){
    const salaryInc = employee.filter((emp) => {
        if(emp.salary < 1000 && emp.age > 20){
            emp.salary *= 5
            return true
        }
        return false
    })
    return salaryInc;
}