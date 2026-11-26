const bar = document.getElementById("peringkat")

const urut = SAMPAH_DATA.slice().sort(function(a,b){
    return b.terkelola - a.terkelola;
});

let html = "";

urut.forEach(function(kota,i){
    html += "<p>" + (i+1) + ". " + kota.short+" : " + kota.terkelola + "%</p>"
    html += '<progress value="' + kota.terkelola + '" max="100"></progress>';
});

bar.innerHTML = html;