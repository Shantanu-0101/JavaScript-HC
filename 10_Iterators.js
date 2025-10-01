let mylist = [22,11,34,45,23]

for(let i=0; i<mylist.length; i++){
   // console.log(`index=${i} value=${mylist[i]}`)
}


// Iterator:

// for(let i in mylist){
//     console.log(`index=${i} value=${mylist[i]}`)

// }


//More simplified form

// for(let i of mylist){
//     console.log(`value=${i}`)
// }



// 'for each' to callback

let mylist1 = [22,11,34,45,23]

mylist.forEach(myFunction)

function myFunction(value , index){
    console.log(`index=${index} value=${value}`)
}


const data = {
    name : "Shantanu",
    age : 18,
    email : "shant@gamil.com",
    no : '111122222'
}

for(let i in data){
    console.log(i)
}

