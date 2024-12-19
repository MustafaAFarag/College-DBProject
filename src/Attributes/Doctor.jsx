const Doctor = () => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md">
      <h3 className="text-sm font-semibold text-yellow-500 mb-2 text-center">
        Doctor
      </h3>

      {/* Table for Doctor Entity */}
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
              <td className="border px-2 py-1">Doctor_ID</td>
              <td className="border px-2 py-1">INT</td>
              <td className="border px-2 py-1">PRIMARY KEY</td>
              <td className="border px-2 py-1">
                Unique identifier for the doctor
              </td>
            </tr>
            <tr>
              <td className="border px-2 py-1">Name</td>
              <td className="border px-2 py-1">VARCHAR(100)</td>
              <td className="border px-2 py-1">NOT NULL</td>
              <td className="border px-2 py-1">Full name of the doctor</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">Specialty</td>
              <td className="border px-2 py-1">VARCHAR(30)</td>
              <td className="border px-2 py-1">NOT NULL</td>
              <td className="border px-2 py-1">Doctor&apos;s specialty</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">YearsOfExperience</td>
              <td className="border px-2 py-1">INT</td>
              <td className="border px-2 py-1">
                CHECK (YearsOfExperience &gt;= 0)
              </td>
              <td className="border px-2 py-1">Years of experience</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">ContactNumber</td>
              <td className="border px-2 py-1">VARCHAR(15)</td>
              <td className="border px-2 py-1">NULL</td>
              <td className="border px-2 py-1">Phone number</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">DepartmentID</td>
              <td className="border px-2 py-1">INT</td>
              <td className="border px-2 py-1">FOREIGN KEY</td>
              <td className="border px-2 py-1">
                Links to the Department table
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Doctor;
