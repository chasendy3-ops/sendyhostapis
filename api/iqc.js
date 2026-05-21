module.exports = {
  name: "Iqc",
  desc: "Iqc Iphone generator",
  category: "Imagecreator",
  path: "/imagecreator/iqc?apikey=&text=",
  async run(req, res) {
    const { apikey, text } = req.query;
    if (!global.apikey.includes(apikey)) return res.json({ status: false, error: 'Apikey invalid' });
    if (!text) return res.json({ status: false, error: 'Missing text' });

    const buffer = await getBuffer(`https://api.fikmydomainsz.xyz/imagecreator/iqc?time=14.20&battery=75&messageText=${encodeURIComponent(text)}&provider=indosat`);
    res.writeHead(200, {
      'Content-Type': 'image/image',
      'Content-Length': buffer.length,
    });
    res.end(buffer);
  }
}
