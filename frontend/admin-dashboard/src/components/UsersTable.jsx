function exportCSV(users) {
  const header = "ID,Name,Email\n";
  const rows = users.map(u => `${u.id},${u.name},${u.email}`).join("\n");
  const csv = header + rows;

  const blob = new Blob([csv], { type: "text/csv" });
  const url = window.URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "users.csv";
  a.click();
}

export default function UsersTable({ users }) {
  return (
    <div className="table-card">
      <h2>Registered Users</h2>

      <button onClick={() => exportCSV(users)}>
        Export CSV
      </button>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map(u => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.name}</td>
              <td>{u.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
