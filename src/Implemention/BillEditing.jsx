import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getBills } from "../services/apiServices";
import supabase from "../services/supabase";

export default function BillEditing() {
  const queryClient = useQueryClient();
  const {
    data: bills = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["bills"],
    queryFn: getBills,
    select: (data) => {
      // Sort the bills by ID to maintain consistent order
      return [...data].sort((a, b) => a.id - b.id);
    },
  });

  const [editingBill, setEditingBill] = useState(null);
  const [formData, setFormData] = useState({
    totalamount: "",
    paymentstatus: "",
    dateissued: "",
  });

  const updateBillMutation = useMutation({
    mutationFn: async (updatedBill) => {
      const { id, totalamount, paymentstatus, dateissued } = updatedBill;
      const { data, error } = await supabase
        .from("bill")
        .update({
          totalamount,
          paymentstatus,
          dateissued,
        })
        .eq("id", id);

      if (error) throw error;
      return data;
    },
    onSuccess: (_, variables) => {
      // Update the cache manually to maintain order
      queryClient.setQueryData(["bills"], (oldData) => {
        if (!oldData) return [];
        return oldData.map((bill) =>
          bill.id === variables.id ? { ...bill, ...variables } : bill
        );
      });
      setEditingBill(null);
    },
  });

  const handleEditClick = (bill) => {
    setEditingBill(bill.id);
    setFormData({
      totalamount: bill.totalamount,
      paymentstatus: bill.paymentstatus,
      dateissued: bill.dateissued,
    });
  };

  const validateDate = (dateString) => {
    if (!dateString) return false;

    const date = new Date(dateString);
    const year = date.getFullYear();

    if (isNaN(year)) return false;

    if (year < 2000 || year > 2999) {
      alert("Year must be between 2000 and 2999.");
      return false;
    }
    return true;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "totalamount") {
      const regex = /^\d{0,4}(\.\d{0,2})?$/;
      if (!regex.test(value)) return;
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSaveClick = () => {
    if (!validateDate(formData.dateissued)) {
      return;
    }

    const totalAmountRegex = /^\d{1,4}(\.\d{0,2})?$/;
    if (!totalAmountRegex.test(formData.totalamount)) {
      alert(
        "Total Amount must have up to 4 digits before the decimal and at most 2 digits after."
      );
      return;
    }

    updateBillMutation.mutate({ id: editingBill, ...formData });
  };

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching bills.</p>;

  return (
    <div>
      <h3 className="text-xl font-semibold text-white mb-4">Bill Editing</h3>
      <table className="min-w-full table-auto border-collapse border border-gray-300 bg-gray-800">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left border-b font-semibold text-white">
              Total Amount
            </th>
            <th className="px-4 py-2 text-left border-b font-semibold text-white">
              Payment Status
            </th>
            <th className="px-4 py-2 text-left border-b font-semibold text-white">
              Date Issued
            </th>
            <th className="px-4 py-2 text-left border-b font-semibold text-white">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {bills.map((bill) =>
            editingBill === bill.id ? (
              <tr key={bill.id} className="text-white">
                <td className="px-4 py-2 border-b">
                  <input
                    type="number"
                    name="totalamount"
                    value={formData.totalamount}
                    onChange={handleInputChange}
                    className="w-full p-1 bg-gray-700 text-white rounded"
                  />
                </td>
                <td className="px-4 py-2 border-b">
                  <select
                    name="paymentstatus"
                    value={formData.paymentstatus}
                    onChange={handleInputChange}
                    className="w-full p-1 bg-gray-700 text-white rounded"
                  >
                    <option value="Paid">Paid</option>
                    <option value="Unpaid">Unpaid</option>
                  </select>
                </td>
                <td className="px-4 py-2 border-b">
                  <input
                    type="date"
                    name="dateissued"
                    value={formData.dateissued}
                    onChange={handleInputChange}
                    min="2000-01-01"
                    max="2999-12-31"
                    className="w-full p-1 bg-gray-700 text-white rounded"
                  />
                </td>
                <td className="px-4 py-2 border-b">
                  <button
                    onClick={handleSaveClick}
                    className="p-1 bg-green-500 text-white rounded mr-2"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditingBill(null)}
                    className="p-1 bg-red-500 text-white rounded"
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            ) : (
              <tr key={bill.id} className="hover:bg-gray-400 text-white">
                <td className="px-4 py-2 border-b">{bill.totalamount}</td>
                <td className="px-4 py-2 border-b">{bill.paymentstatus}</td>
                <td className="px-4 py-2 border-b">{bill.dateissued}</td>
                <td className="px-4 py-2 border-b">
                  <button
                    onClick={() => handleEditClick(bill)}
                    className="p-1 bg-blue-500 text-white rounded"
                  >
                    Edit
                  </button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
}
