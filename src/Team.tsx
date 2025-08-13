import type { EmployeeData } from "./App";
import { Employee } from "./Employee";
 
type TeamProps = {
  employee: EmployeeData;
};
export const Team = ({ employee }: TeamProps) => {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Team : {employee.team}</h2>
      <Employee employee={employee} />
      </div>
  );
};
 
 