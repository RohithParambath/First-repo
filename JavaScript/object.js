/*
let person = {
    "name" : "rohith",
    "mobile" : 1234567890,
    "address" : "Chennai"
};

console.log(person['mobile']);
*/

let personList = [
    {
        "name" : "rohith",
        "mobile" : 1234567890,
        "address" : "sample"
    },
    {
        "name" : "Ben Oliver",
        "mobile" : 9876543210,
        "address" : "sample"
    },
    {
        "name" : "Simpson",
        "mobile" : 7890654321,
        "address" : "addr3"
    }
];

console.log(personList[2]['address']);


for(let i = 0; i < personList.length; i++){
    console.log(personList[i]['name'], personList[i]['mobile'], personList[i]['address']);
    
}