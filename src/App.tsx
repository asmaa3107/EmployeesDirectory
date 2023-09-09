import React, { useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';
import EmployeeDirector from './Components/EmployeesDirector/Employees-Director';
import { saveDataToFile } from './data/faker';


function App() {
  //! just used this for ont time to generate emmplyes data.json file instead of creating node service
  // useEffect(() => {
  //   saveDataToFile();
  // }, []);
  return (
    <div className="App">
      <header className="App-header">
         <EmployeeDirector />
      </header>
    </div>
  );
}

export default App;
