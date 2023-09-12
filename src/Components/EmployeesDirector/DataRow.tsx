import { emp_type } from "../../utils/employee";
type Props = {
    employees : emp_type[],
  };
  
export function DataRow({employees}:Props){
    

//   const handleUpdateEmployee =  (id, employee) => {
//     updateemployee(id, employee).then((data) => {
//       const updatedemployees = employees.map((e) => {
//         if (e.id === id) {
//           return data;
//         } else {
//           return e;
//         }
//       });
//       setemployees(updatedemployees);
//     });
//   };

//   const handleDeleteEmployee =  (id) => {
//     deleteemployee(id).then(() => {
//       setemployees(employees.filter((p) => p.id !== id));
//     });
//   };


 return(
    <>
     {employees.map((employee) => (
        <tr key={employee.id}>
            <td>
              <img src={`${employee.avatar}`}  alt={`${employee.empName}`} className="avatar" />
            </td>
            <td>{employee.empName}</td>
            <td>{employee.email}</td>
            <td>{new Date().toLocaleString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric"
              })}
            </td>
            <td>
                <button>
                    Update Employee
                </button>
                <button >
                    Delete Employee
                </button>
            </td>
          </tr>
         ))}
    </>
 );
}

