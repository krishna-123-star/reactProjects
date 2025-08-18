import React, { useEffect, useState } from "react";
import api from "./api/api";
import { useAuth } from "./api/AuthContext";
type Technician = {
  refId: string;
  firstName: string;
  lastName: string;
  email: string;
  contactNumber: string;
  gender: string;
  location: string | null;
};

function TechnicianDetails() {
  const { token } = useAuth();
  const [technician, setTechnician] = useState<Technician | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTechnician = async () => {
      try {
        const response = await api.get(
          "/technician?id=a5232c79-7f1a-4ae8-8d57-27563805d353",
          {
            headers: {
              Authorization: `Bearer ${token}`, // use token from context
            },
          }
        );

        setTechnician(response.data.data);
      } catch (err) {
        setError("Failed to load technician details.");
      } finally {
        setLoading(false);
      }
    };

    if (token) {
      fetchTechnician();
    } else {
      setError("No token available. Please login first.");
      setLoading(false);
    }
  }, [token]);

  if (loading) return <div style={{ padding: 20 }}>Loading...</div>;
  if (error) return <div style={{ padding: 20, color: "red" }}>{error}</div>;
  if (!technician) return <div style={{ padding: 20 }}>No technician found.</div>;

  return (
    <div style={{ padding: 20 }}>
      <h1>Technician Details</h1>
      <p><strong>ID:</strong> {technician.refId}</p>
      <p><strong>Name:</strong> {technician.firstName} {technician.lastName}</p>
      <p><strong>Email:</strong> {technician.email}</p>
      <p><strong>Phone:</strong> {technician.contactNumber}</p>
      <p><strong>Gender:</strong> {technician.gender}</p>
      <p><strong>Location:</strong> {technician.location ?? "N/A"}</p>
    </div>
  );
}

export default TechnicianDetails;
