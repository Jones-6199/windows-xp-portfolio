const fs = require('fs');

async function download() {
  const res = await fetch("https://github.com/win2k-xp/win2k-xp.github.io/raw/master/assets/audio/Windows%20XP%20Startup.wav");
  const buffer = await res.arrayBuffer();
  fs.writeFileSync("public/startup.wav", Buffer.from(buffer));
  console.log("Done");
}
download();
