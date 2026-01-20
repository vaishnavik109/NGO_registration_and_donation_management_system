import { useState } from "react";
import api from "../services/api";

export default function Donate() {
  const [amount, setAmount] = useState("");

  const handleDonate = async () => {
    try {
      await api.post("/donation/create", {
        amount,
        status: "SUCCESS"
      });
      alert("Donation successful");
      setAmount("");
    } catch (err) {
      alert("Donation failed");
    }
  };

  return (
    <div className="form-container">
      <h2>Make a Donation</h2>
      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={e => setAmount(e.target.value)}
      />
      <button onClick={handleDonate}>Donate</button>
    </div>
  );
}
