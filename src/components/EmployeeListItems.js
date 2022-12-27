export default function EmployeeListItems(props) {
  const { name, role, img } = props;
  return (
    <div style={{ border: "red 3px solid", margin: "3px", display: "flex" }}>
      <div style={{ flex: "0.1", margin: "5px" }}>
        <img style={styleImage} src={img} width="80px" alt="" />
      </div>
      <div style={{ flex: "1" }}>
        <div style={styleName}>{name}</div>
        <div style={styleRole}> {role}</div>
      </div>
    </div>
  );
}

const styleName = {
  margin: "2px",
  padding: "5px",
  fontSize: "2rem",
  display: "flex",
};

const styleRole = {
  margin: "2px",
  padding: "5px",
  fontSize: "1.25rem",
  display: "flex",
};

const styleImage = {
  borderRadius: "50%",
};
