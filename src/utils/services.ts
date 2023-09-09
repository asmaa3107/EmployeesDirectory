import axios from "axios";
import { emp_type } from "./employee";
// getAllEmp
export const getAllEmp = async () => {
  const response = await axios.get("http://localhost:5001/employees");
  return response.data;
};
//create
export const createNewEmp = async (employee: emp_type) => {
  const response = await axios.post("http://localhost:5001/employees", employee);
  return response.data;
};

//update
// export const updateProduct = async (id, product) => {
//   const response = await axios.put(`http://localhost:5001/employees/${id}`, product);
//   return response.data;
// };

// delete
// export const deleteProduct = async (id) => {
//   const response = await axios.delete(`http://localhost:5001/employees/${id}`);
//   return response.data;
// };
