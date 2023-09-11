import axios from "axios";
import { emp_type } from "./employee";
// getAllEmp
export const getAllEmp = async () => {
  const response = await axios.get("http://localhost:5001/employees");
  return response.data;
};
//create
export const createNewEmp = async (employee: emp_type) => {
  debugger;
  // const response = await axios.post("http://localhost:5001/employees", employee);
  fetch("http://localhost:5001/employees", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(employee),
  }).then((res) => {
    console.log(res);
  });
};

//update
export const updateEmployee = async (id: string, employee: emp_type) => {
  const response = await axios.put(
    `http://localhost:5001/employees/${id}`,
    employee
  );
  return response.data;
};

// delete
export const deleteEmployee = async (id: string) => {
  const response = await axios.delete(`http://localhost:5001/employees/${id}`);
  return response.data;
};
