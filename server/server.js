// server.js

import express from 'express';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware (optional for JSON support)
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.send('Hello from Express 5.1.0!');
});

// 404 handler
app.use((req, res, next) => {
  res.status(404).send('Not Found');
});

// Error handler (Express 5 requires 4 args)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});