// Write your solution in this file!
let employee = {
    name: "jim",
    streetAddress: '123 fake st'
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const updatedEmployee = { ...employee, [key]: value};
    updatedEmployee.name = 'Sam';
    return updatedEmployee;
}
updateEmployeeWithKeyAndValue();


function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee.streetAddress = value;
    return employee;
}
destructivelyUpdateEmployeeWithKeyAndValue()


function deleteFromEmployeeByKey(employee, key){
    let clone = {...employee};
    delete clone[key];
    return clone;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}