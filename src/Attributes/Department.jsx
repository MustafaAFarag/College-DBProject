const Department = () => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md">
      <h3 className="text-sm font-semibold text-yellow-500 mb-2 text-center">
        Department
      </h3>

      {/* Table for Department Entity */}
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
              <td className="border px-2 py-1">DepartmentID</td>
              <td className="border px-2 py-1">INT</td>
              <td className="border px-2 py-1">PRIMARY KEY</td>
              <td className="border px-2 py-1">
                Unique identifier for the department
              </td>
            </tr>
            <tr>
              <td className="border px-2 py-1">Name</td>
              <td className="border px-2 py-1">VARCHAR(100)</td>
              <td className="border px-2 py-1">NOT NULL</td>
              <td className="border px-2 py-1">Department name</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">Location</td>
              <td className="border px-2 py-1">VARCHAR(50)</td>
              <td className="border px-2 py-1">NULL</td>
              <td className="border px-2 py-1">
                Physical location of the department
              </td>
            </tr>
            <tr>
              <td className="border px-2 py-1">HeadOfDepartment</td>
              <td className="border px-2 py-1">INT</td>
              <td className="border px-2 py-1">FOREIGN KEY</td>
              <td className="border px-2 py-1">
                References Staff table (manager)
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Department;
