import Appointment from "../Attributes/Appointment";
import Bill from "../Attributes/Bill";
import Department from "../Attributes/Department";
import Doctor from "../Attributes/Doctor";
import Patient from "../Attributes/Patient";
import Room from "../Attributes/Room";
import Staff from "../Attributes/Staff";
import Treatment from "../Attributes/Treatment";

export default function Attributes() {
  return (
    <div className="mt-10">
      <h2 className="text-3xl text-center text-yellow-500 font-semibold mb-4">
        Attributes
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
    </div>
  );
}
