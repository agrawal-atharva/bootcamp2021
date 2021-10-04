function mySandwich(param1, param2, callback){
    console.log(`Started eating my sandwich. \nIt has ${param1} & ${param2}.`)
    callback();
}

mySandwich(`Ham`, `Cheese`, function(){
    console.log(`Finished eating my sandwich.`)
})