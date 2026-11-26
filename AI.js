// =====================================
// FUNGSI PENCARIAN DATA
// =====================================

function cariData() {

    const key = document
        .getElementById("inputCari")
        .value
        .toLowerCase()
        .trim();

    const wilayah = document
        .getElementById("filterWilayah")
        .value
        .toLowerCase();

    const rows = document.querySelectorAll("#isiTabel tr");

    let hitung = 0;

    rows.forEach(row => {

        const teks = row.innerText.toLowerCase();

        const cocokKata = teks.includes(key);

        const cocokWilayah =
            wilayah === "" || teks.includes(wilayah);

        const cocok = cocokKata && cocokWilayah;

        row.style.display = cocok ? "" : "none";

        if (cocok) {
            hitung++;
        }

    });

    // Memperbarui jumlah data
    document.getElementById("countData").innerText = hitung;

    // Menampilkan pesan jika data tidak ditemukan
    document.getElementById("tidakDitemukan").hidden =
        hitung !== 0;

}


// =====================================
// EVENT PENCARIAN OTOMATIS
// =====================================

document
    .getElementById("inputCari")
    .addEventListener("input", cariData);

document
    .getElementById("filterWilayah")
    .addEventListener("change", cariData);


// =====================================
// FUNGSI EXPORT EXCEL (CSV)
// =====================================

function exportExcel() {

    const tabel = document.getElementById("tabelSampah");

    const rows = tabel.querySelectorAll("tr");

    let csv = [];

    rows.forEach(row => {

        const kolom = row.querySelectorAll("th, td");

        let dataBaris = [];

        kolom.forEach(cell => {

            let isi = cell.innerText
                .replace(/\s+/g, " ")
                .trim()
                .replace(/"/g, '""');

            dataBaris.push('"' + isi + '"');

        });

        csv.push(dataBaris.join(";"));

    });

    // Membuat file CSV
    const isiCSV = "\uFEFF" + csv.join("\r\n");

    const blob = new Blob(
        [isiCSV],
        { type: "text/csv;charset=utf-8;" }
    );

    // Membuat link download
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;

    link.download = "Data_Pengelolaan_Sampah_DKI_Jakarta.csv";

    document.body.appendChild(link);

    link.click();

    link.remove();

    URL.revokeObjectURL(url);

}