import { useEffect, useRef, useState } from "react";
import { getAllEmp } from "../../utils/services";
import { emp_type } from "../../utils/employee";
import { DataRow } from "./DataRow";


function EmployeeDirector() {
  const [employees, setEmployees] = useState<emp_type[]>([]);
  const PAGE_SIZE = 50; // Number of records to fetch per page
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const loadMoreRef = useRef(null);

  // methods
  const getEmployees = () => {
    setLoading(true);
    getAllEmp().then((res) => {
      debugger;
      // setEmployees(res);
      setEmployees(prevRecords => [...prevRecords, ...res]);

    }).catch((err) => {
      console.error(err);
    })
    .finally(() => {
     setLoading(false);
    });;
  }
  // useEffect(() => {
  //   getEmployees();
  // }, [setEmployees]);
//-------------
const handleIntersection = (entries:any) => {
  debugger;

  const [entry] = entries;
  if (entry.isIntersecting) {
    debugger;

    getEmployees();
  }
};

useEffect(() => {
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver(handleIntersection, options);

  if (loadMoreRef.current) {
    debugger;

    observer.observe(loadMoreRef.current);
  }

  return () => {
    if (loadMoreRef.current) {
      debugger;
      observer.unobserve(loadMoreRef.current);
    }
  };
}, []);
  return (
    <div>
     <div className="card white_card ">
  <div className="card-header">
    <div>
      <h5 className="card-title">Employee diretcor</h5>
    {/* <div> number of employees : {employees.length} </div> */}
    </div>
    <div>
      <button>
        + New
      </button>
      {/* onClick={() => handleCreateProduct({ name: "New Product" })} */}
    </div>
  </div>
  <div className="card-body">
    <table className="table table-hover table-bordered">
      <thead>
        <tr>
          <th>Avatar</th>
          <th>Name</th>
          <th>Email</th>
          <th>start date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {loading ?  <tr><td colSpan={5}>LOADING ... </td></tr> :   <DataRow  employees={employees}/>}
      </tbody>
    </table>
    <div ref={loadMoreRef} 
          style={{ backgroundColor: 'yellow',fontWeight:"bold",fontSize:"30px" }}>
            showing more ...
          </div>
  </div>
</div>
    </div>
  );
}

export default EmployeeDirector;

// _id: string;
// empName: string;
// email: string;
// phone: string;
// dateOfBirth: string;
// dateStart: string;
// avatar: string;
// jobTitle:string; department:string; salary:string;


// const handleScroll = () => {
//   if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
//     if (!loading) {
//       fetchData(currentPage); // Load more data when the user reaches the end of the page
//     }
//   }
// };

// useEffect(() => {
//   window.addEventListener('scroll', handleScroll);
//   return () => {
//     window.removeEventListener('scroll', handleScroll);
//   };
// }, [loading, currentPage]);

// const handleCreateProduct = (product) => {
//   createProduct(product).then((data) => {
//     setProducts([...products, data]);
//   });
// };