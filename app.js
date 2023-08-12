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
    <!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-WFWQQL6N');</script>
    <!-- End Google Tag Manager -->
    <style>
      body {
        background-color: #DBA628;
        margin: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        height: 100vh;
      }
      .title {
        color: #753918;
        text-align: center;
        padding-top: 20px;
      }
      #buttonButton {
        background-color: #FCF7EA;
        border-radius: 8px;
        padding: 10px 20px;
        font-size: 16px;
        border: none;
        cursor: pointer;
        margin-top: 20px;
      }
      #buttonButton {
        transition: background-color 0.3s; 
      }
      #buttonButton.clicked {
        background-color: #FABF75; 
      }
    </style>
  </head>
  <body>
    <div class="title">
      <h1>Welcome to Page Tracker</h1>
    </div>
    <button id="buttonButton" onclick="recordAction('button_click')">Button Click</button>
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WFWQQL6N"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->
    <script>
      // Define the recordAction function
      function recordAction(action) {
        // Send AJAX request to record user action
        fetch('/recordAction', {
          method: 'POST',
          body: JSON.stringify({ action }),
          headers: { 'Content-Type': 'application/json' }
        });
        const button = document.getElementById('buttonButton');
        button.classList.add('clicked');
    
        // Remove the "clicked" class after a short delay to reset the button style
        setTimeout(() => {
          button.classList.remove('clicked');
        }, 300);
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

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
