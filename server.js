const express = require('express');
const path = require('path');
const app = express();

// Serve the frontend file
app.use(express.static(path.join(__dirname, 'public')));

// Route for calculator operations
app.get('/api/calc/:operation', (req, res) => {
  const { operation } = req.params;
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);

  // Validation
  if (isNaN(num1) || isNaN(num2)) {
    return res.status(400).json({ error: 'Please provide valid numbers' });
  }

  let result;

  switch (operation) {
    case 'add':
      result = num1 + num2;
      break;
    case 'subtract':
      result = num1 - num2;
      break;
    case 'multiply':
      result = num1 * num2;
      break;
    case 'divide':
      if (num2 === 0) return res.status(400).json({ error: 'Cannot divide by zero' });
      result = num1 / num2;
      break;
    default:
      return res.status(400).json({ error: 'Invalid operation' });
  }

  res.json({ result });
});

// Start server
app.listen(3000, () => console.log('✅ Calculator running on port 3000'));
