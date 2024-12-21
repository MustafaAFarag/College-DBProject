import { useEffect, useState } from "react";
import { getPatients } from "../services/apiServices";

export default function PatientRecords() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const data = await getPatients();
        setPatients(data);
        console.log("Patients fetched:", data);
      } catch (error) {
        console.error("Error fetching patients:", error.message);
      }
    };

    fetchPatients();
  }, []);

  return (
    <div className="overflow-x-auto">
      <div>
        <h3 className="text-xl font-semibold text-white mb-4">
          Retreival of all Patient Records
        </h3>
        {patients.length > 0 ? (
          <div className="bg-gray-800 border border-gray-300 p-4">
            {/* Table Header */}
            <div className="grid grid-cols-7 gap-4 bg-gray-600 px-4 py-2 text-white font-semibold">
              <div>ID</div>
              <div>Name</div>
              <div>Age</div>
              <div>Gender</div>
              <div>Address</div>
              <div>Phone</div>
              <div>Details</div>
            </div>

            {patients.map((patient) => (
              <div
                className="grid grid-cols-7 gap-4 border-b border-gray-300 px-4 py-2 text-white hover:bg-gray-400"
                key={patient.id}
              >
                <div>{patient.id}</div>
                <div>{patient.name}</div>
                <div>{patient.date_of_birth}</div>
                <div>{patient.gender}</div>
                <div>{patient.address}</div>
                <div>{patient.contact_number}</div>
                <div>{patient.insurance_details}</div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center">No patients found.</p>
        )}
      </div>
    </div>
  );
}
