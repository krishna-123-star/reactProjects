import type { EmployeeData } from "./App";
import { Team } from "./Team";
 
type DepartmentProps = {
  employee: EmployeeData;
};
export const Department = ({ employee }: DepartmentProps) => {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>

      <h1>Department: {employee.department}</h1>
      <Team employee={employee} />
    </div>
  );
};
 
 