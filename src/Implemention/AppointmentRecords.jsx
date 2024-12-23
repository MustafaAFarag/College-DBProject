import {
  getAppointments,
  getDoctors,
  getPatients,
  createAppointment,
} from "../services/apiServices";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

export default function AppointmentRecords() {
  const queryClient = useQueryClient();

  const [formData, setFormData] = useState({
    patientid: "",
    doctorid: "",
    appointmentdate: "",
    appointmenttime: "",
    status: "Scheduled",
  });

  const { data: appointments = [], isError: isAppointmentsError } = useQuery({
    queryKey: ["appointments"],
    queryFn: getAppointments,
  });

  const { data: doctors = [], isError: isDoctorsError } = useQuery({
    queryKey: ["doctors"],
    queryFn: getDoctors,
  });

  const { data: patients = [], isError: isPatientsError } = useQuery({
    queryKey: ["patients"],
    queryFn: getPatients,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createAppointment(formData);

      // Reset form after submission
      setFormData({
        patientid: "",
        doctorid: "",
        appointmentdate: "",
        appointmenttime: "",
        status: "Scheduled",
      });

      // Invalidate query to refresh appointments
      queryClient.invalidateQueries(["appointments"]);
    } catch (error) {
      console.error("Error creating appointment:", error.message);
    }
  };

  if (isDoctorsError || isPatientsError) {
    return <div>ERROR CONNECTING TO SUPABASE</div>;
  }

  return (
    <div className="flex justify-between">
      <div className="w-1/2 p-4">
        <h3 className="text-xl font-semibold text-white mb-4">Appointments</h3>
        {isAppointmentsError ? (
          <p className="text-red-500">Error fetching appointments.</p>
        ) : (
          <table className="min-w-full table-auto border-collapse border border-gray-300 bg-gray-800">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left border-b font-semibold text-white">
                  Patient
                </th>
                <th className="px-4 py-2 text-left border-b font-semibold text-white">
                  Doctor
                </th>
                <th className="px-4 py-2 text-left border-b font-semibold text-white">
                  Appointment Date
                </th>
                <th className="px-4 py-2 text-left border-b font-semibold text-white">
                  Appointment Time
                </th>
                <th className="px-4 py-2 text-left border-b font-semibold text-white">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appointment) => {
                const patient = patients.find(
                  (p) => p.id === appointment.patientid
                );
                const doctor = doctors.find(
                  (d) => d.id === appointment.doctorid
                );

                return (
                  <tr
                    key={appointment.id}
                    className="hover:bg-gray-400 text-white"
                  >
                    <td className="px-4 py-2 border-b">
                      {patient ? patient.name : "Unknown Patient"}
                    </td>
                    <td className="px-4 py-2 border-b">
                      {doctor ? doctor.name : "Unknown Doctor"}
                    </td>
                    <td className="px-4 py-2 border-b">
                      {appointment.appointmentdate}
                    </td>
                    <td className="px-4 py-2 border-b">
                      {appointment.appointmenttime}
                    </td>
                    <td className="px-4 py-2 border-b">{appointment.status}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
      <div className="w-1/2 p-4">
        <h3 className="text-xl font-semibold text-white mb-4">
          Add Appointment
        </h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-white">Patient</label>
            <select
              name="patientid"
              value={formData.patientid}
              onChange={handleInputChange}
              className="w-full p-2 mt-2 bg-gray-700 text-white border border-gray-500 rounded"
            >
              <option value="">Select Patient</option>
              {patients.map((patient) => (
                <option key={patient.id} value={patient.id}>
                  {patient.name}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-white">Doctor</label>
            <select
              name="doctorid"
              value={formData.doctorid}
              onChange={handleInputChange}
              className="w-full p-2 mt-2 bg-gray-700 text-white border border-gray-500 rounded"
            >
              <option value="">Select Doctor</option>
              {doctors.map((doctor) => (
                <option key={doctor.id} value={doctor.id}>
                  {doctor.name}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-white">Appointment Date</label>
            <input
              type="date"
              name="appointmentdate"
              value={formData.appointmentdate}
              onChange={handleInputChange}
              className="w-full p-2 mt-2 bg-gray-700 text-white border border-gray-500 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white">Appointment Time</label>
            <input
              type="time"
              name="appointmenttime"
              value={formData.appointmenttime}
              onChange={handleInputChange}
              className="w-full p-2 mt-2 bg-gray-700 text-white border border-gray-500 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white">Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleInputChange}
              className="w-full p-2 mt-2 bg-gray-700 text-white border border-gray-500 rounded"
            >
              <option value="Scheduled">Scheduled</option>
              <option value="Completed">Completed</option>
              <option value="Cancelled">Cancelled</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full p-2 mt-4 bg-yellow-500 text-white font-semibold rounded"
          >
            Add Appointment
          </button>
        </form>
      </div>
    </div>
  );
}
