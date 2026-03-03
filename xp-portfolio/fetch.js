const https = require('https');
const fs = require('fs');

const url = 'https://github.com/ErickRer/Windows-XP-Sound-Effects/raw/master/Windows%20XP%20Startup.wav';
const file = fs.createWriteStream('public/startup.wav');

https.get(url, (res) => {
  if (res.statusCode === 301 || res.statusCode === 302) {
    https.get(res.headers.location, (redirectRes) => {
      redirectRes.pipe(file);
    });
  } else {
    res.pipe(file);
  }
});
