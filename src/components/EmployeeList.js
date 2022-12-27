import EmployeeListItems from "./EmployeeListItems";

const employees = [
  {
    name: "James King",
    role: "President & CEO",
    img: "https://www.bethesdaheadshots.com/wp-content/uploads/2021/06/JONATHAN_5022P_ppFIN.jpg",
  },
  {
    name: "Julie Taylor",
    role: "VP of Marketing",
    img: "https://thelightcommittee.com/wp-content/uploads/2022/09/women-linkedin-headshot-los-angeles.jpg",
  },
  {
    name: "Eugene Lee",
    role: "CFO",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_FFkJVfisJbx-LcAwFEnpvbJ1ucG9Fy7Z16uNucbb5sP1qxP9FBoRibe6NSGdFW94jR8&usqp=CAU",
  },
  {
    name: "John Williams",
    role: "VP of Engineering",
    img: "https://zenstudiosla.com/wp-content/uploads/2019/11/Austin-professional-headshot.jpg",
  },
  {
    name: "Ray Moore",
    role: "VP of Sales",
    img: "https://images.squarespace-cdn.com/content/v1/624f4bb135fbf60489e1bccf/a48fa550-25a4-45dc-984f-7bcdd7ac7b71/Casey+Deidrick+headshot+by+Marc+Cartwright++jpgweb.jpg?format=750w",
  },
  {
    name: "Paul Jones",
    role: "QA Manager",
    img: "https://www.themobileheadshot.com/wp-content/uploads/2022/09/TMH00193-1024x819.jpg",
  },
];

export default function EmployeeList() {
  return (
    <div style={style}>
      {employees.map((employee) => {
        return <EmployeeListItems {...employee} />;
      })}
    </div>
  );
}

const style = {
  border: "purple 3px solid",
  display: "flex",
  margin: "2px",
  padding: "2px",
  flexDirection: "column",
};
