import { useEmployee } from "./EmployeeContext";

export const Employee = () => {
  const employee = useEmployee();

  return (
    <>
      <h4>Employee Details:</h4>
      <p>ID: {employee?.id}</p>
      <p>Name: {employee?.name}</p>
      <p>Position: {employee?.position}</p>
    </>
  );
};
