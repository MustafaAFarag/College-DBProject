import erd from "../assets/erd.jpeg";

export default function ERD() {
  return (
    <div className="p-8 text-white rounded-lg  flex">
      {/* ERD Image */}
      <div className="mb-8 w-full max-w-4xl mr-8">
        <img
          src={erd}
          alt="Entity Relationship Diagram"
          className="w-[900px] h-[700px] rounded-lg shadow-md"
        />
      </div>

      <div className="w-full max-w-4xl">
        {/* Entities Section */}
        <div className="mb-8">
          <h2 className="text-3xl text-yellow-500 font-semibold mb-4">
            Entities
          </h2>
          <p className="text-lg mb-4">
            The following are the key entities in the system:
          </p>
          <div className="grid grid-cols-4 gap-6 text-lg">
            <div>Patient</div>
            <div>Doctor</div>
            <div>Staff</div>
            <div>Department</div>
            <div>Room</div>
            <div>Treatment</div>
            <div>Bill</div>
            <div>Appointment</div>
          </div>
        </div>

        {/* Line Divider */}
        <div className="border-t-2 border-yellow-500 my-6"></div>

        {/* Relationships Section */}
        <div>
          <h2 className="text-3xl text-yellow-500 font-semibold mb-4">
            Relationships
          </h2>
          <p className="text-lg mb-4">
            The relationships between entities are as follows:
          </p>
          <ul className="list-decimal pl-6 text-lg mt-2 space-y-2">
            <li>
              A patient can pay multiple bills, has appointments, stays in
              rooms, and gets treated by doctors.
            </li>
            <li>
              A doctor treats patients, administrates treatments, and works in a
              department.
            </li>
            <li>
              Staff members work in departments and may manage other employees.
            </li>
            <li>Rooms are assigned to patients for their stay.</li>
            <li>Treatments are administered to patients by doctors.</li>
            <li>Bills are paid by patients.</li>
            <li>Appointments are assigned to patients for their time.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
