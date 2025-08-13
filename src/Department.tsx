import { useEmployee } from "./EmployeeContext";
import { Team } from "./Team";

export const Department = () => {
  const employee = useEmployee();

  return (
    <>
      <h2>Department: {employee?.department}</h2>
      <Team />
    </>
  );
};
