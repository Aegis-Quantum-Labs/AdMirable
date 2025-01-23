// controllers/charityController.js

// Stub function: in a real app, you'd fetch from DB or external service
exports.listCharities = async (req, res) => {
  try {
    const charities = [
      { id: 'C001', name: 'Red Cross', category: 'Health', verified: true },
      { id: 'C002', name: 'Save the Children', category: 'Children', verified: true },
      { id: 'C003', name: 'Doctors Without Borders', category: 'Health', verified: true }
      // ... more
    ];
    return res.status(200).json(charities);
  } catch (error) {
    console.error('List charities error:', error);
    return res.status(500).json({ error: 'Internal server error.' });
  }
};