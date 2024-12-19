const Bill = () => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md">
      <h3 className="text-sm font-semibold text-yellow-500 mb-2 text-center">
        Bill
      </h3>

      {/* Table for Bill Entity */}
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
              <td className="border px-2 py-1">Bill_ID</td>
              <td className="border px-2 py-1">INT</td>
              <td className="border px-2 py-1">PRIMARY KEY</td>
              <td className="border px-2 py-1">
                Unique identifier for the bill
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
              <td className="border px-2 py-1">TotalAmount</td>
              <td className="border px-2 py-1">DECIMAL(10,2)</td>
              <td className="border px-2 py-1">NOT NULL</td>
              <td className="border px-2 py-1">Total bill amount</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">PaymentStatus</td>
              <td className="border px-2 py-1">VARCHAR(20)</td>
              <td className="border px-2 py-1">
                CHECK (PaymentStatus IN (&apos;Paid&apos;,&apos;Unpaid&apos;))
              </td>
              <td className="border px-2 py-1">Payment status</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">DateIssued</td>
              <td className="border px-2 py-1">DATE</td>
              <td className="border px-2 py-1">NOT NULL</td>
              <td className="border px-2 py-1">Bill issue date</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bill;
