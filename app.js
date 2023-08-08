const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Simulated storage for recorded user actions
const recordedActions = [];

app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Page Tracker</title>
      </head>
      <body>
        <h1>Welcome to Page Tracker</h1>
        <button id="buttonButton" onclick="recordAction('button_click')">Button Click</button>
        <script>
          function recordAction(action) {
            // Send AJAX request to record user action
            fetch('/recordAction', {
              method: 'POST',
              body: JSON.stringify({ action }),
              headers: { 'Content-Type': 'application/json' }
            });
          }
        </script>
      </body>
    </html>
  `);
});

app.post("/recordAction", (req, res) => {
  const { action } = req.body;
  recordedActions.push({
    action,
    timestamp: new Date(),
    userAgent: req.headers["user-agent"],
    page: "Page Tracker",
  });
  res.json({ message: "Action recorded successfully" });
});

app.get("/viewActions", (req, res) => {
  res.json(recordedActions);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
