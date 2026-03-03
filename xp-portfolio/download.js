import fs from 'fs';
import https from 'https';

const download = (url, path) => {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      // Handle redirects
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return download(res.headers.location, path).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        reject(new Error(`Failed to get '${url}' (${res.statusCode})`));
        return;
      }
      const stream = fs.createWriteStream(path);
      res.pipe(stream);
      stream.on('finish', () => {
        stream.close(resolve);
      });
    }).on('error', reject);
  });
};

async function run() {
  await download('https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1920&auto=format&fit=crop', 'public/bliss.jpg');
  console.log('Downloaded bliss.jpg');
  await download('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop', 'public/avatar.jpg');
  console.log('Downloaded avatar.jpg');
}

run();
