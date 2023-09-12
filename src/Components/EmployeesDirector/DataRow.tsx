import { emp_type } from "../../utils/employee";
type Props = {
    employees : emp_type[],
  };
  
export function DataRow({employees}:Props){
    
//   const handleCreateProduct = (product) => {
//     createProduct(product).then((data) => {
//       setProducts([...products, data]);
//     });
//   };

//   const handleUpdateProduct = (id, product) => {
//     updateProduct(id, product).then((data) => {
//       const updatedProducts = products.map((p) => {
//         if (p.id === id) {
//           return data;
//         } else {
//           return p;
//         }
//       });
//       setProducts(updatedProducts);
//     });
//   };

//   const handleDeleteProduct = (id) => {
//     deleteProduct(id).then(() => {
//       setProducts(products.filter((p) => p.id !== id));
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
                    Update Product
                </button>
                <button >
                    Delete Product
                </button>
            </td>
          </tr>
         ))}
    </>
 );
}

