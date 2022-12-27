import Header from "./Header";

export default function EmployeePage() {
  return (
    <div style={style}>
      <Header title="Employee"/>
    </div>
  );
}

const style = {
  display: "flex",
  border: "brown 3px solid",
  margin: "2px",
  flex: "1",
  flexDirection: "column",
  padding: "2px",
};