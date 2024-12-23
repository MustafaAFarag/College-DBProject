const PatientTreatment = () => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md">
      <h3 className="text-sm font-semibold text-yellow-500 mb-2 text-center">
        Patient Treatment
      </h3>

      {/* Table for Patient Treatment Entity */}
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
              <td className="border px-2 py-1">Patient_ID</td>
              <td className="border px-2 py-1">INT</td>
              <td className="border px-2 py-1">
                FOREIGN KEY references Patient(Patient_ID)
              </td>
              <td className="border px-2 py-1">
                Unique identifier for the patient
              </td>
            </tr>
            <tr>
              <td className="border px-2 py-1">Treatment_ID</td>
              <td className="border px-2 py-1">INT</td>
              <td className="border px-2 py-1">
                FOREIGN KEY references Treatment(Treatment_ID)
              </td>
              <td className="border px-2 py-1">
                Unique identifier for treatment
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PatientTreatment;
