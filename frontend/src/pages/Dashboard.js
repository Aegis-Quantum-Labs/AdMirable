import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Dashboard() {
  const [donationTotal, setDonationTotal] = useState(0);

  useEffect(() => {
    // Example fetch from backend
    axios.get('http://localhost:4000/api/donations/total')
      .then(response => setDonationTotal(response.data.total))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>My Dashboard</h2>
      <p>Total Donations: ${donationTotal.toFixed(2)}</p>
      <p>Select your preferred charities, view donation history, and more.</p>
    </div>
  );
}