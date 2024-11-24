export default function RecentTickets() {
  return (
    <div className="overflow-x-auto bg-white shadow-lg border rounded-2xl p-4 ">
      <p className="font-medium mb-3 px-4 text-2xl">Recent Support Tickets</p>
      <table className="table text-center">
        <thead>
          <tr>
            <th>ID</th>
            <th>Company</th>
            <th>Name</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <td>Teasdale Fenton</td>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>
              <span className="bg-teal-200 border-teal-600 text-teal-700 rounded-md border-[1px] px-4 py-1 font-medium block w-full">
                Active
              </span>
            </td>
          </tr>
          <tr>
            <th>2</th>
            <td>Dalworth Restoration</td>
            <td>Hart Hagerty</td>
            <td>Desktop Support Technician</td>
            <td>
              <span className="bg-red-200 border-red-600 text-red-600 rounded-md border-[1px] px-4 py-1 font-medium block w-full">
                Inactive
              </span>
            </td>
          </tr>
          <tr>
            <th>3</th>
            <td>Valor Janitorial</td>
            <td>Brice Swyre</td>
            <td>Tax Accountant</td>
            <td>
              <span className="bg-teal-200 border-teal-600 text-teal-700 rounded-md border-[1px] px-4 py-1 font-medium block w-full">
                Active
              </span>
            </td>
          </tr>
          <tr>
            <th>4</th>
            <td>Valor Janitorial</td>
            <td>Brice Swyre</td>
            <td>Tax Accountant</td>
            <td>
              <span className="bg-red-200 border-red-600 text-red-600 rounded-md border-[1px] px-4 py-1 font-medium block w-full">
                Inactive
              </span>
            </td>
          </tr>
          <tr>
            <th>5</th>
            <td>Valor Janitorial</td>
            <td>Brice Swyre</td>
            <td>Tax Accountant</td>
            <td>
              <span className="bg-teal-200 border-teal-600 text-teal-700 rounded-md border-[1px] px-4 py-1 font-medium block w-full">
                Active
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
