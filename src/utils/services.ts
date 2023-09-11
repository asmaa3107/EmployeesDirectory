import axios from "axios";
import { emp_type } from "./employee";
// getAllEmp
export const getAllEmp = async () => {
  const response = await axios.get("http://localhost:5001/employees");
  return response.data;
};
export const apiClient = axios.create({
  baseURL: "http://localhost:5001",
  headers: {
    "Content-Type": "application/json",
  },
});
//create
export const createNewEmp = async (employee: emp_type) => {
  console.log(JSON.stringify(apiClient), apiClient.head.name);
  const response = await apiClient.post("/employees/", employee);

  // const response  = fetch("http://localhost:5001/employees/", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(employee),
  // }).then((res) => {
  //   console.log(res);
  // });
  return response;
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
