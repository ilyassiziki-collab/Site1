const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/health', (req, res) => {
  res.json({
    ok: true,
    uptime: Math.round(process.uptime()),
    node: process.version,
    greeting: process.env.GREETING || 'Hello',
  });
});

app.get('/boom', () => {
  throw new Error('Simulated request error');
});

app.listen(process.env.PORT || 3000, () => console.log('site1 is listening'));
