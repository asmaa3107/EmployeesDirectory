import { faker } from '@faker-js/faker';
// import fs from 'fs';
import { emp_type } from '../utils/employee';


const generateEmployees = (count: number) => {
  const employees = [];

  for (let i = 0; i < count; i++) {
    const employee :emp_type = {
      _id:faker.string.alpha(15)  ,
      empName: faker.person.fullName(),
      email: faker.internet.email(),
      phone: faker.phone.number(),
      avatar:faker.image.url() ,
      dateStart:faker.date.anytime().toString(),
      dateOfBirth:faker.date.anytime().toString(),
      jobTitle: faker.person.jobTitle(),
      department: faker.commerce.department(),
      salary: faker.finance.amount(30000, 100000, 2),
    };

    employees.push(employee);
  }

  return employees;
};

// const employeesData = generateEmployees(10000);
// const jsonData = JSON.stringify(employeesData, null, 2);

// fs.writeFile('employees.json', jsonData, (err) => {
//   if (err) {
//     console.error('Error writing JSON file:', err);
//   } else {
//     console.log('Data written to employees.json file.');
//   }
// });



const employeeData = generateEmployees(10000);
export const saveDataToFile = () => {
    const jsonData = { employees: employeeData };
    const jsonString = JSON.stringify(jsonData, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'employees.json';
    link.click();
  };
// saveDataToFile(employeeData);