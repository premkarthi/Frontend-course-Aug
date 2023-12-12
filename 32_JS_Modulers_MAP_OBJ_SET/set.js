
let normlSet = new Set()


// sets stores only a unique value 

normlSet.add("a")
normlSet.add("a")
normlSet.add("b")


console.log(normlSet.has("c"));


normlSet.delete("a")


console.log(normlSet);
