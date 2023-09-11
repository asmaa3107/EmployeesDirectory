import { useEffect, useRef, useState } from "react";
import { getAllEmp } from "../../utils/services";
import { emp_type } from "../../utils/employee";
import { DataRow } from "./DataRow";
import { Link } from 'react-router-dom';


function EmployeeDirector() {
  const [employees, setEmployees] = useState<emp_type[]>([]);
  const PAGE_SIZE = 20; // Number of records to fetch per page
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  let TOTAL_PAGES : number = 0;
  // methods
  const getEmployees = () => {
    setLoading(true);
    getAllEmp().then((res) => {
      // setEmployees(res);
      setEmployees(prevRecords => [...prevRecords, ...res]);

    }).catch((err) => {
      console.error(err);
    })
    .finally(() => {
     setLoading(false);
    });
    TOTAL_PAGES = Math.floor(employees.length / PAGE_SIZE);
    console.log(TOTAL_PAGES);
  }
  useEffect(() => {
    getEmployees();
  }, [setEmployees]);
//-------------

const handleScroll = () => {
  if (
    window.innerHeight + document.documentElement.scrollTop ===
    document.documentElement.offsetHeight
  ) {
    // Reached the bottom of the page
    setCurrentPage((prevPageNumber) => prevPageNumber + 1);
  }
};
const loadMore = () => {
    // Reached the bottom of the page
    setCurrentPage((prevPageNumber) => prevPageNumber + 1);
};
useEffect(() => {
  window.addEventListener('scroll', handleScroll);
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);

const visibleEmployees = employees.slice(0, currentPage * PAGE_SIZE); 
  return (
    <div>
     <div className="card white_card" id="fetchData">
  <div className="card-header">
    <div>
      <h5 className="card-title">Employee diretcor</h5>
    </div>
    <div>
    <Link to="/new-employee">
    <button>
        + New
      </button>
      </Link>
      
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
        {loading ?  <tr><td colSpan={5}>LOADING ... </td></tr> : <DataRow  employees={visibleEmployees}/>}
      </tbody>
    </table>
    <div className="footer"><button  onClick={loadMore}>Load More</button> Employees : {visibleEmployees.length} </div>

  </div>
</div>
    </div>
  );
}

export default EmployeeDirector;

