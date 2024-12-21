import { useState, useEffect } from "react";
import {
  getAppointments,
  getDoctors,
  getPatients,
  createAppointment,
} from "../services/apiServices";

export default function AppointmentRecords() {
  const [appointments, setAppointments] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [patients, setPatients] = useState([]);
  const [formData, setFormData] = useState({
    patientid: "",
    doctorid: "",
    appointmentdate: "",
    appointmenttime: "",
    status: "Scheduled", // Default status
  });

  useEffect(() => {
    const fetchAppointmentsData = async () => {
      try {
        const data = await getAppointments();
        setAppointments(data);
      } catch (error) {
        console.error("Error fetching appointments:", error.message);
      }
    };

    const fetchDoctorsData = async () => {
      try {
        const data = await getDoctors();
        setDoctors(data);
      } catch (error) {
        console.error("Error fetching doctors:", error.message);
      }
    };

    const fetchPatientsData = async () => {
      try {
        const data = await getPatients();
        setPatients(data);
      } catch (error) {
        console.error("Error fetching patients:", error.message);
      }
    };

    fetchAppointmentsData();
    fetchDoctorsData();
    fetchPatientsData();
  }, []);

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
      const newAppointment = await createAppointment(formData);
      console.log("New Appointment Created:", newAppointment);

      setFormData({
        patientid: "",
        doctorid: "",
        appointmentdate: "",
        appointmenttime: "",
        status: "Scheduled",
      });

      // Refetch appointments to include the new one
      const updatedAppointments = await getAppointments();
      setAppointments(updatedAppointments);
    } catch (error) {
      console.error("Error creating appointment:", error.message);
    }
  };

  return (
    <div className="flex justify-between">
      {/* Left Side: Appointment Table */}
      <div className="w-1/2 p-4">
        <h3 className="text-xl font-semibold text-white mb-4">Appointments</h3>
        {appointments.length > 0 ? (
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
              {appointments.map((appointment) => (
                <tr
                  key={appointment.id}
                  className="hover:bg-gray-400 text-white"
                >
                  <td className="px-4 py-2 border-b">
                    {appointment.patientid}
                  </td>
                  <td className="px-4 py-2 border-b">{appointment.doctorid}</td>
                  <td className="px-4 py-2 border-b">
                    {appointment.appointmentdate}
                  </td>
                  <td className="px-4 py-2 border-b">
                    {appointment.appointmenttime}
                  </td>
                  <td className="px-4 py-2 border-b">{appointment.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-gray-500 text-center">No appointments found.</p>
        )}
      </div>

      {/* Right Side: Appointment Form */}
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
