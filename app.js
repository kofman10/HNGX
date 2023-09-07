const express = require('express');
const app = express();

// Define a route to handle GET requests with query parameters
app.get('/api', (req, res) => {
  const { slack_name, track } = req.query;
  
  // Validate slack_name and track query parameters
  if (!slack_name || !track) {
    return res.status(400).json({ error: 'Both slack_name and track are required query parameters.' });
  }

  // Get the current UTC time with validation of +/-2 minutes
  const now = new Date();
  const utcTime = new Date(now.getTime() + 2 * 60000).toISOString();
console.log(now, utcTime)
  // Construct the JSON response
  const jsonResponse = {
    slack_name,
    current_day: new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(now),
    utc_time: utcTime,
    track,
    github_file_url: 'https://github.com/username/repo/blob/main/file_name.ext',
    github_repo_url: 'https://github.com/kofman10/HNGX',
    status_code: 200,
  };

  // Send the JSON response
  res.status(200).json(jsonResponse);
});

// Start the server on port 3000 (you can change this if needed)
const port = 8080;
app.listen(process.env.PORT || port, () => {
  console.log(`Server is running on port ${port}`);
});
