import Appointment from "../Attributes/Appointment";
import Bill from "../Attributes/Bill";
import Department from "../Attributes/Department";
import Doctor from "../Attributes/Doctor";
import Patient from "../Attributes/Patient";
import PatientContact from "../Attributes/PatientContact";
import PatientRoom from "../Attributes/PatientRoom";
import DoctorPatient from "../Attributes/DoctorPatient";
import Room from "../Attributes/Room";
import Staff from "../Attributes/Staff";
import Treatment from "../Attributes/Treatment";
import DoctorContact from "../Attributes/DoctorContact";
import PatientTreatment from "../Attributes/PatientTreatment";
import DoctorTreatment from "../Attributes/DoctorTreatment";

export default function Attributes() {
  return (
    <div className="mt-10">
      <h2 className="text-3xl text-center text-yellow-500 font-semibold mb-4">
        Attributes
      </h2>

      <h2 className="text-3xl text-center text-orange-500 font-semibold mb-4">
        Ordinary Tables
      </h2>

      <div className="grid grid-cols-4 gap-4">
        <Patient />

        <Doctor />

        <Department />

        <Staff />

        <Room />

        <Treatment />

        <Bill />

        <Appointment />
      </div>

      <h2 className="text-3xl text-center text-orange-500 font-semibold mb-4 mt-10">
        Relationship Tables
      </h2>

      <div className="grid grid-cols-3 gap-4">
        <PatientContact />
        <PatientRoom />
        <DoctorPatient />
        <DoctorContact />
        <PatientTreatment />
        <DoctorTreatment />
      </div>
    </div>
  );
}
