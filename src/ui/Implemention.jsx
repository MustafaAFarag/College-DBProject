import AppointmentRecords from "../Implemention/AppointmentRecords";
import PatientRecords from "../Implemention/PatientRecords";

export default function Implementation() {
  return (
    <div className="mt-10">
      <h2 className="text-3xl text-center text-yellow-500 font-semibold mb-4">
        Implementation
      </h2>
      <PatientRecords />
      <AppointmentRecords />
    </div>
  );
}
