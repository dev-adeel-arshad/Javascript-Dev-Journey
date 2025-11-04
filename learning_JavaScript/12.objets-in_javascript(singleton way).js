// That way of declaring the object is claeed the sigleton way
const tinderuser = new Object()
const user = {}
user.id = "123abc"
user.name = "adeel"
user.isloggedin = false

const user2 = {
    email: "email.com",
    fullname: {
        userfullname: {
            firstname: "adeel",
            lastname: "arshad",
        }
    }
}
console.log(user2.fullname);//this will show whoe nesting to reove that nesting we can do..
console.log(user2.fullname.userfullname.firstname);
const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }
const obj3 = { 5: "a", 6: "b" }
//if w have to combine these two objects.
let combined = Object.assign(obj1, obj2)
console.log(combined);
//when we write syntax as we have written above it ensures that  keys and values of obj2 are passed into obj1 but it is safe to pass values of all objects into an empty objects if we have more than 2 objects. the example is below:
let combined1 = Object.assign({}, obj1, obj2)//output remains same
console.log(combined1);
//if we have to combine 3 objects
let combined2 = Object.assign({}, obj1, obj2, obj3)
console.log(combined2);
// ***imp***
// we can use the spread operator instead of assign
let cobm4 = { ...obj1, ...obj2, ...obj3 }
console.log(comb4);

/*
when data comes from the databse than it is in the from of arrays of objects as:
let user=[
{
............
}
{
.........
}
{
..........
}
]
and we can access them by:
1.index values   user[1].email
2.using the following syntax  Object.keys(user)
Object.values(user)
Object.entries(user)-> when we write that syntax it return array of each key and its value like ['id','123abc'] etc
*/
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));
//if we want to check that whether that mey exis or not we can check that
console.log(user.hasOwnProperty('isloggedin'));
