const terkelola = {};
SAMPAH_DATA.forEach(item=>{
    terkelola[item.short]=item.terkelola;
});
const timbulan = {};
SAMPAH_DATA.forEach(item=>{
    timbulan[item.short]=item.timbulan;
});
const bsuAktif = {};
SAMPAH_DATA.forEach(item=>{
    bsuAktif[item.short]=item.bsuAktif;
});

// option kota mau di adu
const aduA = document.getElementById("aduA");
const aduB = document.getElementById("aduB");

// bar sampah terkelola
const labelTerkelolaA = document.getElementById("labelTerkelolaA");
const labelTerkelolaB = document.getElementById("labelTerkelolaB");
const barTerkelolaA = document.getElementById("barTerkelolaA");
const barTerkelolaB = document.getElementById("barTerkelolaB");
const spanTerkelolaA = document.getElementById("spanTerkelolaA");
const spanTerkelolaB = document.getElementById("spanTerkelolaB");

// bar timbulan
const labelTimbulanA = document.getElementById("labelTimbulanA");
const labelTimbulanB = document.getElementById("labelTimbulanB");
const barTimbulanA = document.getElementById("barTimbulanA");
const barTimbulanB = document.getElementById("barTimbulanB");
const spanTimbulanA = document.getElementById("spanTimbulanA");
const spanTimbulanB = document.getElementById("spanTimbulanB");

// bar bsu aktif
const labelBsuA = document.getElementById("labelBsuA");
const labelBsuB = document.getElementById("labelBsuB");
const barBsuA = document.getElementById("barBsuA");
const barBsuB = document.getElementById("barBsuB");
const spanBsuA = document.getElementById("spanBsuA");
const spanBsuB = document.getElementById("spanBsuB");

function tampilkan(){
    const kotaA = aduA.value;
    const kotaB = aduB.value;

    // print bar terkelola
    labelTerkelolaA.textContent = kotaA; 
    barTerkelolaA.value = terkelola[kotaA];
    spanTerkelolaA.textContent = terkelola[kotaA]+"%";
    labelTerkelolaB.textContent = kotaB;
    barTerkelolaB.value = terkelola[kotaB];
    spanTerkelolaB.textContent = terkelola[kotaB]+"%";
    
    // print bar timbulan
    if (timbulan[kotaA] > timbulan[kotaB]){
        barTimbulanA.max = timbulan[kotaA];
        barTimbulanB.max = timbulan[kotaA];
    }else{
        barTimbulanA.max = timbulan[kotaB];
        barTimbulanB.max = timbulan[kotaB];
    }
    labelTimbulanA.textContent = kotaA; 
    barTimbulanA.value = timbulan[kotaA];
    spanTimbulanA.textContent = timbulan[kotaA]+" ton";
    labelTimbulanB.textContent = kotaB;
    barTimbulanB.value = timbulan[kotaB];
    spanTimbulanB.textContent = timbulan[kotaB]+" ton";
    
    // print bar bsu aktif
    if (bsuAktif[kotaA] > bsuAktif[kotaB]){
        barBsuA.max = bsuAktif[kotaA];
        barBsuB.max = bsuAktif[kotaA];
    }else{
        barBsuA.max = bsuAktif[kotaB];
        barBsuB.max = bsuAktif[kotaB];
    }
    labelBsuA.textContent = kotaA; 
    barBsuA.value = bsuAktif[kotaA];
    spanBsuA.textContent = bsuAktif[kotaA];
    labelBsuB.textContent = kotaB;
    barBsuB.value = bsuAktif[kotaB];
    spanBsuB.textContent = bsuAktif[kotaB];
};
aduA.addEventListener("change",tampilkan);
aduB.addEventListener("change",tampilkan);

let pilihan ="";
for (const kota in terkelola){
    pilihan+='<option value="'+kota+'">'+kota+"</option>";
}
aduA.innerHTML=pilihan;
aduB.innerHTML=pilihan;

aduA.value = "Pulau Seribu";
aduB.value = "Jakarta Timur";
tampilkan();