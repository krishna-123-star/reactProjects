import type { EmployeeData } from "./App";
 
type EmployeeProps = {
  employee: EmployeeData;
};
export const Employee = ({ employee }: EmployeeProps) => {
  return (
    <>
      <h4>Employee Details:</h4>
      <h5>ID: {employee.id}</h5>
      <h5>Name: {employee.name}</h5>
      <h5>Position: {employee.position}</h5>
    </>
  );
};
 
 