import { useState } from "react";

export default function DonationsTable({ donations }) {
  const [status, setStatus] = useState("ALL");

  const filtered =
    status === "ALL"
      ? donations
      : donations.filter(d => d.status === status);

  return (
    <div className="table-card">
      <h2>Donations</h2>

      <select onChange={e => setStatus(e.target.value)}>
        <option value="ALL">All</option>
        <option value="SUCCESS">SUCCESS</option>
        <option value="PENDING">PENDING</option>
        <option value="FAILED">FAILED</option>
      </select>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map(d => (
            <tr key={d.id}>
              <td>{d.id}</td>
              <td>₹ {d.amount}</td>
              <td className={d.status.toLowerCase()}>
                {d.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
