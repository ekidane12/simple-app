export default function SearchBar() {
  return (
    <div style={style}>
      <input style={inputStyle}></input>
    </div>
  );
}

const style = {
  display: "flex",
  border: "green 3px solid",
  margin: "2px",
  padding: "5px",
};

const inputStyle = {
  height: "28px",
  width: "830px",
  fontSize: "20px",
};
