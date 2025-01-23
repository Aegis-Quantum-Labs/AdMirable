// charityController.js
// Stub to manage charity data

exports.listCharities = async (req, res) => {
  try {
    // Example static data
    const charities = [
      { id: 1, name: 'Red Cross', category: 'Health', verified: true },
      { id: 2, name: 'Save the Children', category: 'Children', verified: true }
    ];
    return res.json(charities);
  } catch (err) {
    return res.status(500).json({ error: 'Failed to list charities' });
  }
};