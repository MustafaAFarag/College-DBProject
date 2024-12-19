const Appointment = () => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md">
      <h3 className="text-sm font-semibold text-yellow-500 mb-2 text-center">
        Appointment
      </h3>

      {/* Table for Appointment Entity */}
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
              <td className="border px-2 py-1">AppointmentID</td>
              <td className="border px-2 py-1">INT</td>
              <td className="border px-2 py-1">PRIMARY KEY</td>
              <td className="border px-2 py-1">
                Unique identifier for the appointment
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
              <td className="border px-2 py-1">AppointmentDate</td>
              <td className="border px-2 py-1">DATE</td>
              <td className="border px-2 py-1">NOT NULL</td>
              <td className="border px-2 py-1">Date of the appointment</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">AppointmentTime</td>
              <td className="border px-2 py-1">TIME</td>
              <td className="border px-2 py-1">NOT NULL</td>
              <td className="border px-2 py-1">Time of the appointment</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">Status</td>
              <td className="border px-2 py-1">VARCHAR(50)</td>
              <td className="border px-2 py-1">
                CHECK (Status IN (&apos;Scheduled&apos;, &apos;Completed&apos;,
                &apos;Cancelled&apos;))
              </td>
              <td className="border px-2 py-1">Appointment status</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Appointment;
