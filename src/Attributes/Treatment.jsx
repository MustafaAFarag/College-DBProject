const Treatment = () => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md">
      <h3 className="text-sm font-semibold text-yellow-500 mb-2 text-center">
        Treatment
      </h3>

      {/* Table for Treatment Entity */}
      <div className="overflow-x-auto">
        <table className="table-auto w-full text-white text-xs">
          <thead>
            <tr>
              <th className="border px-2 py-1 text-left">Attribute</th>
              <th className="border px-2 py-1 text-left">Data Type</th>
              <th className="border px-2 py-1 text-left">Constraints</th>
              <th className="border px-2 py-1 text-left">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-2 py-1">TreatmentID</td>
              <td className="border px-2 py-1">INT</td>
              <td className="border px-2 py-1">PRIMARY KEY</td>
              <td className="border px-2 py-1">
                Unique identifier for treatment
              </td>
            </tr>
            <tr>
              <td className="border px-2 py-1">PatientID</td>
              <td className="border px-2 py-1">INT</td>
              <td className="border px-2 py-1">
                FOREIGN KEY REFERENCES Patient
              </td>
              <td className="border px-2 py-1">Links to Patient table</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">DoctorID</td>
              <td className="border px-2 py-1">INT</td>
              <td className="border px-2 py-1">
                FOREIGN KEY REFERENCES Doctor
              </td>
              <td className="border px-2 py-1">Links to Doctor table</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">Diagnosis</td>
              <td className="border px-2 py-1">VARCHAR(200)</td>
              <td className="border px-2 py-1">NULL</td>
              <td className="border px-2 py-1">Diagnosis description</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">TreatmentDetails</td>
              <td className="border px-2 py-1">TEXT</td>
              <td className="border px-2 py-1">NULL</td>
              <td className="border px-2 py-1">Detailed treatment notes</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Treatment;
