import { useEffect, useState } from "react";
import SummaryCard from "../components/SummaryCard";
import UsersTable from "../components/UsersTable";
import DonationsTable from "../components/DonationsTable";

import { fetchUsers } from "../services/userApi";
import { fetchDonations } from "../services/donationApi";

export default function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [donations, setDonations] = useState([]);
  const [search, setSearch] = useState("");

  // Load data from backend
  useEffect(() => {
    fetchUsers().then(res => setUsers(res.data));
    fetchDonations().then(res => setDonations(res.data));
  }, []);

  // Calculate total donations
  const totalDonations = donations.reduce(
    (sum, d) => sum + Number(d.amount),
    0
  );

  // Filter users
  const filteredUsers = users.filter(u =>
    u.name.toLowerCase().includes(search.toLowerCase()) ||
    u.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="admin-container">
      <h1 className="title">Admin Dashboard</h1>

      <SummaryCard
        title="Total Donations"
        value={`₹ ${totalDonations}`}
      />

      {/* USER FILTER */}
      <div className="filter-box">
        <input
          type="text"
          placeholder="Search users by name or email"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      <UsersTable users={filteredUsers} />
      <DonationsTable donations={donations} />
    </div>
  );
}
