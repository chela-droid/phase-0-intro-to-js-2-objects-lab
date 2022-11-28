// Write your solution in this file!
const employee = {
    name:'caroline', 
    streetAddress:'yaya'}
    

function updateEmployeeWithKeyAndValue(employee,key,value){
    const newEmployee = {...employee}
     newEmployee[key]=value;
      return newEmployee;

}

function destructivelyUpdateEmployeeWithKeyAndValue(employee,key , value){
        newEmployee[key]= value;
         return employee;
}

const newEmployee = updateEmployeeWithKeyAndValue(
    employee,
    "tittle",
    "assistant"
);
// function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
//     const streetAddress={employee}
//     newEmployee[key]=value
//     return ('streetAddress'='12 Broadway')
// }

// function destructivelyUpdateEmployeeWithKeyAndValue (employeee, key, value) {
    // employee[key]=value;
    // return ('Sam');
// }

destructivelyUpdateEmployeeWithKeyAndValue(
    employee,
    "placeOfBirth",
    "Yaya",
);
function deleteFromEmployeeByKey(employee, key) {
    const newDetails={employee};
    delete newDetails[key];
    return newDetails;
}
deleteFromEmployeeByKey(
    employee,
    "placeOfBirth",
);
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}
destructivelyDeleteFromEmployeeByKey(
    employee,
    "streetName",
);

// function destructivelyUpdateEmployeeWithKeyAndValue(){
//     'name:Sam'
//     'streetAddress:12 Broadway'
// }