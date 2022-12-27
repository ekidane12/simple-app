import HomePage from './components/HomePage'
import EmployeePage from "./components/EmployeePage";


import './App.css';

function App() {
  return (
    <div className="App">
      <h2>Hello from React</h2>
      <div style={style}>
        <HomePage />
        <EmployeePage />
      </div>
    </div>
  );
}

const style = {
  display: "flex",
  border: "black 1.5px solid",
  margin: "5px",
  
};

export default App;