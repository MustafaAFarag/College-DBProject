const Room = () => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md">
      <h3 className="text-sm font-semibold text-yellow-500 mb-2 text-center">
        Room
      </h3>

      {/* Table for Room Entity */}
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
              <td className="border px-2 py-1">Room_ID</td>
              <td className="border px-2 py-1">INT</td>
              <td className="border px-2 py-1">PRIMARY KEY</td>
              <td className="border px-2 py-1">
                Unique identifier for the room
              </td>
            </tr>
            <tr>
              <td className="border px-2 py-1">RoomNumber</td>
              <td className="border px-2 py-1">VARCHAR(10)</td>
              <td className="border px-2 py-1">NOT NULL</td>
              <td className="border px-2 py-1">Room number</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">RoomType</td>
              <td className="border px-2 py-1">VARCHAR(50)</td>
              <td className="border px-2 py-1">NULL</td>
              <td className="border px-2 py-1">Type of the room</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">AvailabilityStatus</td>
              <td className="border px-2 py-1">VARCHAR(20)</td>
              <td className="border px-2 py-1">
                CHECK (AvailabilityStatus IN
                (&apos;Available&apos;,&apos;Occupied&apos;))
              </td>
              <td className="border px-2 py-1">Room status</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Room;
