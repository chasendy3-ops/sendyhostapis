module.exports = {
  name: "Nulis Kertas",
  desc: "nulis di kertas",
  category: "Imagecreator",
  path: "/imagecreator/nulis?apikey=&waktu=&hari=&nama=&kelas=&text=",
  async run(req, res) {
    const { apikey, waktu, hari, nama, kelas, text } = req.query;
    
    if (!apikey || !global.apikey.includes(apikey)) {
      return res.json({ status: false, error: 'Apikey invalid' });
    }

    if (!waktu || !hari || !nama || !kelas || !text) {
      return res.json({ status: false, error: 'semua wajib diisi' });
    }
    
    const buffer = await getBuffer(`https://api.fikmydomainsz.xyz/imagecreator/nulis?waktu=${encodeURIComponent(waktu)}&hari=${encodeURIComponent(hari)}&nama=${encodeURIComponent(nama)}&kelas=${encodeURIComponent(kelas)}&text=${encodeURIComponent(text)}`);
    res.writeHead(200, {
      'Content-Type': 'image/image',
      'Content-Length': buffer.length,
    });
    res.end(buffer);
  }
}
