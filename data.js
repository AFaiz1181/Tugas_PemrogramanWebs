/*
 * Data pengelolaan sampah 14 kota/kabupaten (Jabodetabek)
 * Sumber: berkas data_sampah.xlsx dari pengguna.
 *
 * Yang dirapikan dari berkas asli:
 *  - Ejaan: "kab.bogir" -> Kabupaten Bogor, "open duming" -> open dumping, "tbd" -> tpd
 *  - Angka "2,404 tpd" diubah menjadi angka 2404 (ton per hari)
 *  - Pulau Seribu: terkelola 30,73% + belum terkelola 67,27% = 98%.
 *    Di sini "belum terkelola" dihitung ulang sebagai 100 - terkelola (catatan: true).
 *
 * Kolom yang tidak dipakai di situs karena satuannya tidak jelas:
 *  sampah terkelola BSU / BSI, progres SA, verifikasi lapangan.
 */
const SAMPAH_DATA = [
  { id: "jak-timur",    nama: "Kota Jakarta Timur",     short: "Jakarta Timur",     provinsi: "DKI Jakarta", tpa: "open-dumping",       kelompok343: false, bsuAktif: 333, bsuNon: 0,   bsiAktif: 1, rips: "sah",       timbulan: 2455, terkelola: 16.28, catatan: false },
  { id: "jak-utara",    nama: "Kota Jakarta Utara",     short: "Jakarta Utara",     provinsi: "DKI Jakarta", tpa: "open-dumping",       kelompok343: false, bsuAktif: 517, bsuNon: 272, bsiAktif: 1, rips: "sah",       timbulan: 1411, terkelola: 21.49, catatan: false },
  { id: "jak-pusat",    nama: "Kota Jakarta Pusat",     short: "Jakarta Pusat",     provinsi: "DKI Jakarta", tpa: "open-dumping",       kelompok343: false, bsuAktif: 619, bsuNon: 214, bsiAktif: 1, rips: "sah",       timbulan: 858,  terkelola: 17.68, catatan: false },
  { id: "jak-barat",    nama: "Kota Jakarta Barat",     short: "Jakarta Barat",     provinsi: "DKI Jakarta", tpa: "open-dumping",       kelompok343: false, bsuAktif: 415, bsuNon: 177, bsiAktif: 1, rips: "sah",       timbulan: 1943, terkelola: 25.94, catatan: false },
  { id: "jak-selatan",  nama: "Kota Jakarta Selatan",   short: "Jakarta Selatan",   provinsi: "DKI Jakarta", tpa: "open-dumping",       kelompok343: false, bsuAktif: 495, bsuNon: 0,   bsiAktif: 1, rips: "sah",       timbulan: 2005, terkelola: 19.97, catatan: false },
  { id: "pulau-seribu", nama: "Kabupaten Pulau Seribu", short: "Pulau Seribu",      provinsi: "DKI Jakarta", tpa: "open-dumping",       kelompok343: false, bsuAktif: 23,  bsuNon: 0,   bsiAktif: 1, rips: "sah",       timbulan: 30,   terkelola: 30.73, catatan: true  }
];
