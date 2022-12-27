export default function Header(props) {
  return <div style={style}>{props.title}</div>;
}

const style = {
  display: "flex",
  border: "blue 3px solid",
  margin: "2px",
  padding: "10px",
  fontSize: "1.7rem",
};
