import React from "react";
import "./UserProfile.css";

interface User {
  name: string;
  email: string;
  address: string;
  age: number;
}

const UserProfile: React.FC = () => {
  const user: User = {
    name: "Krishna",
    email: "krishna@gmail.com",
    address: "Kerala",
    age: 17,
  };

  return (
    <div className="card">
      <h2 className="title">User Profile</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Address:</strong> {user.address}</p>
      <p><strong>Age:</strong> {user.age}</p>
      <p>
        <strong>Status:</strong>{" "}
        <span className="status">
          {user.age > 18 ? "Adult" : "Minor"}
        </span>
      </p>
    </div>
  );
};

export default UserProfile;
