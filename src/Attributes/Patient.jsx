const Patient = () => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md">
      <h3 className="text-sm font-semibold text-yellow-500 mb-2 text-center">
        Patient
      </h3>

      {/* Table for Patient Entity */}
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
              <td className="border px-2 py-1">PRIMARY KEY</td>
              <td className="border px-2 py-1">
                Unique identifier for the patient
              </td>
            </tr>
            <tr>
              <td className="border px-2 py-1">Name</td>
              <td className="border px-2 py-1">VARCHAR(100)</td>
              <td className="border px-2 py-1">NOT NULL</td>
              <td className="border px-2 py-1">Full name of the patient</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">DateOfBirth</td>
              <td className="border px-2 py-1">DATE</td>
              <td className="border px-2 py-1">NULL</td>
              <td className="border px-2 py-1">Date of birth</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">Gender</td>
              <td className="border px-2 py-1">VARCHAR(10)</td>
              <td className="border px-2 py-1">
                CHECK (Gender IN (&apos;M&apos;, &apos;F&apos;,
                &apos;Other&apos;))
              </td>
              <td className="border px-2 py-1">Gender of the patient</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">Address</td>
              <td className="border px-2 py-1">VARCHAR(100)</td>
              <td className="border px-2 py-1">NULL</td>
              <td className="border px-2 py-1">Residential address</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">ContactNumber</td>
              <td className="border px-2 py-1">VARCHAR(15)</td>
              <td className="border px-2 py-1">NULL</td>
              <td className="border px-2 py-1">Phone number</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">InsuranceDetails</td>
              <td className="border px-2 py-1">VARCHAR(150)</td>
              <td className="border px-2 py-1">NULL</td>
              <td className="border px-2 py-1">Insurance information</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Patient;
