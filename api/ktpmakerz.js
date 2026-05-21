module.exports = {
  name: "KTP Maker",
  desc: "create ktp generate",
  category: "Imagecreator",
  path: "/imagecreator/ktpmaker?nama=&nik=&ttl=&jk=&alamat=&agama=&status=&pekerjaan=&kewarganegaraan=&image=&masaberlaku=&terbuat=",
  async run(req, res) {
    const { nama, nik, ttl, jk, alamat, agama, status, pekerjaan, kewarganegaraan, image, masaberlaku, terbuat } = req.query;

    if (!nama || !nik || !ttl || !jk || !alamat || !agama || !status || !pekerjaan || !kewarganegaraan || !image || !masaberlaku || !terbuat ) {
      return res.json({ status: false, error: 'semua wajib diisi' });
    }
    
    const buffer = await getBuffer(`https://api.zenzxz.my.id/maker/fakektp?provinsi=ISI&kota=ISI&nik=${nik}&${encodeURIComponent(nama)}=ISI&ttl=${encodeURIComponent(ttl)}&jenis_kelamin=${encodeURIComponent(jk)}&golongan_darah=-&alamat=${encodeURIComponent(alamat)}&rt_rw=ISI&kel_desa=ISI&kecamatan=ISI&agama=${encodeURIComponent(agama)}&status==${encodeURIComponent(status)}&pekerjaan=${encodeURIComponent(pekerjaan)}&kewarganegaraan=${encodeURIComponent(kewarganegaraan)}&masa_berlaku=${encodeURIComponent(masaberlaku)}&terbuat=${encodeURIComponent(terbuat)}&url=${encodeURIComponent(image)}`);
    res.writeHead(200, {
      'Content-Type': 'image/png',
      'Content-Length': buffer.length,
    });
    res.end(buffer);
  }
}
