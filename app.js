const express = require('express');
const app = express();
const dotenv = require('dotenv')

dotenv.config()


app.get('/api', (req, res) => {
  const { slack_name, track } = req.query;
  
  if (!slack_name || !track) {
    return res.status(400).json({ error: 'Both slack_name and track are required query parameters.' });
  }

  const now = new Date();
  const utcTime = new Date(now.getTime() + 2 * 60000).toISOString();
  const jsonResponse = {
    slack_name,
    current_day: new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(now),
    utc_time: utcTime,
    track,
    github_file_url: 'https://github.com/kofman10/HNGX/blob/main/app.js',
    github_repo_url: 'https://github.com/kofman10/HNGX',
    status_code: 200,
  };

  res.status(200).json(jsonResponse);
});

const port = 8080;
app.listen(process.env.PORT || port, () => {
  console.log(`Server is running on port ${port}`);
});
