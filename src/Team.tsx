import { useEmployee } from "./EmployeeContext";
import { Employee } from "./Employee";

export const Team = () => {
  const employee = useEmployee();

  return (
    <>
      <h3>Team: {employee?.team}</h3>
      <Employee />
    </>
  );
};
