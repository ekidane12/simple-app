import Header from "./Header";
import SearchBar from "./SearchBar";
import EmployeeList from "./EmployeeList";

export default function HomePage() {
  return (
    <div style={style}>
      <Header title="Employee Directory" />
      <SearchBar />
      <EmployeeList />
    </div>
  );
}

const style = {
  border: "#cfa911 3px solid",
  display: "flex",
  margin: "2px",
  padding: "2px",
  flexDirection: "column",
  flex: "1",
};
