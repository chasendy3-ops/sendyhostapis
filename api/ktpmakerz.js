module.exports = {
  name: "KTP Maker",
  desc: "create ktp generate",
  category: "Imagecreator",
  path: "/imagecreator/ktpmaker?nama=&nik=&ttl=&jk=&alamat=&agama=&status=&pekerjaan=&kewarganegaraan=&image=",
  async run(req, res) {
    const { nama, nik, ttl, jk, alamat, agama, status, pekerjaan, kewarganegaraan, image } = req.query;

    if (!nama || !nik || !ttl || !jk || !alamat || !agama || !status || !pekerjaan || !kewarganegaraan || !image) {
      return res.json({ status: false, error: 'semua wajib diisi' });
    }
    
    const buffer = await getBuffer(`https://api.siputzx.my.id/api/maker/ktp?nama=${encodeURIComponent(nama)}&nik=${nik}&ttl=${encodeURIComponent(ttl)}&jk=${encodeURIComponent(jk)}&alamat=${encodeURIComponent(alamat)}&agama=${encodeURIComponent(agama)}&status=${encodeURIComponent(status)}&pekerjaan=${encodeURIComponent(pekerjaan)}&kewarganegaraan=${encodeURIComponent(kewarganegaraan)}&image=${encodeURIComponent(image)}`);
    res.writeHead(200, {
      'Content-Type': 'image/png',
      'Content-Length': buffer.length,
    });
    res.end(buffer);
  }
}
