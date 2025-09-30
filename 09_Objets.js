const student = {
    name1 : "Shantanu",
    email : "Shant@gmail.com",
    contact : "0203920928",
    age : 18,
    fullname : function() {
        return "Shantanu Panchal"
    },
    add : (n1,n2) => {
        return n1 + n2
    },
    subject : {
        maths : 50,
        eng : 70,
        sci : 90    
    }

}

console.log(student)
console.log(student.name1)
console.log(student.age)
console.log(student["age"])
console.log(student.fullname())
console.log(student.add(2,2))

student.email = "Shanatnu@gamil.com"
console.log(student.email)

console.log(student.subject.sci)