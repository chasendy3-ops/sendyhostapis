const axios = require("axios");

module.exports = {
  name: "Create Logo Chibi V1",
  desc: "Mengubah teks menjadi Logo Chibi Keren",
  category: "Imagecreator",
  path: "/imagecreator/logochibi?name=",
  params: ["name"],
  async run(req, res) {
    const { name } = req.query;

    if (!name) {
      return res.status(400).json({
        status: false,
        message: "Parameter ?name= wajib diisi!",
      });
    }

    try {
      const seed =
        Date.now().toString() + Math.floor(Math.random() * 1e6).toString();
      const imageUrl = `https://api-sendyhost.vercel.app/imagecreator/aiimage?prompt=Buatkan%20Logo%20Anime%20Chibi%20Dengan%20Nama%20yang%20diminta%20Berikut%20ini:%20
      ${encodeURIComponent(name)}`;

      // ambil gambar langsung sebagai buffer
      const response = await axios.get(imageUrl, { responseType: "arraybuffer" });

      res.writeHead(200, {
        "Content-Type": response.headers["content-type"] || "image/png",
        "Content-Length": response.data.length,
      });
      res.end(response.data);

    } catch (error) {
      res.status(500).json({
        status: false,
        message: "Gagal menghasilkan gambar: " + error.message,
      });
    }
  },
};
