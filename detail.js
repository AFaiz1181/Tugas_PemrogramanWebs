const buttonDetail = document.getElementById("buttonDetail");
const optionDetail = document.getElementById("optionDetail");

let tombol = "";
SAMPAH_DATA.forEach(function (kota) {
    tombol += '<button data-id="' + kota.id + '">' + kota.short + " " + Math.round(kota.terkelola) + "%</button> ";
});
buttonDetail.innerHTML = tombol;


SAMPAH_DATA.forEach(function (kota) {
    pilihan += '<option value="' + kota.id + '">' + kota.nama + "</option>";
});
optionDetail.innerHTML = '<select id="pilih">' + pilihan + '</select><div id="hasil"></div>';

const pilih = document.getElementById("pilih");   
const hasil = document.getElementById("hasil");

function tampilkan(id) {
    const kota = SAMPAH_DATA.find(function (k) { return k.id === id; });
    const peringkat = urut.findIndex(function (k) { return k.id === id; }) + 1;

    pilih.value = id;   

    hasil.innerHTML =
        "<h3>" + kota.nama + "</h3>" +
        "<p>" + kota.provinsi + "</p>" +
        '<progress value="' + kota.terkelola + '" max="100"></progress>' +
        "<p>Dikelola: " + kota.terkelola + "%</p>" +
        "<p>Sampah per hari: " + kota.timbulan + " ton</p>" +
        "<p>Bank sampah aktif: " + kota.bsuAktif + "</p>" +
        "<p>Peringkat: ke-" + peringkat + " dari " + SAMPAH_DATA.length + "</p>";
}


pilih.addEventListener("change", function () {
    tampilkan(pilih.value);
});

buttonDetail.addEventListener("click", function (e) {
    const b = e.target.closest("button");
    if (!b) return;
    tampilkan(b.dataset.id);
});


tampilkan(urut[0].id);