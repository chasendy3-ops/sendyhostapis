module.exports = {
  name: "Text to QR",
  desc: "Generate QR code dari Teks",
  category: "Tools",
  path: "/tools/texttoqr?apikey=&text=",
  async run(req, res) {
    const { apikey, text } = req.query;
    if (!global.apikey.includes(apikey)) return res.json({ status: false, error: 'Apikey invalid' });
    if (!text) return res.json({ status: false, error: 'Missing text' });

    const buffer = await getBuffer(`https://api.fikmydomainsz.xyz/tools/texttoqr?text=${encodeURIComponent(text)}`);
    res.writeHead(200, {
      'Content-Type': 'image/image',
      'Content-Length': buffer.length,
    });
    res.end(buffer);
  }
}