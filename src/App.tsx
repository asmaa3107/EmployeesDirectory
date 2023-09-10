import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import EmployeeDirector from './Components/EmployeesDirector/EmployeesDirector';
import CreateNew from './Components/EmployeesDirector/CreateNew/CreateNew';


function App() {
  //! just used this for ont time to generate emmplyes data.json file instead of creating node service
  // useEffect(() => {
  //   saveDataToFile();
  // }, []);
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route path="/" element={<EmployeeDirector />} />
            <Route path="/new-employee" Component={CreateNew} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
