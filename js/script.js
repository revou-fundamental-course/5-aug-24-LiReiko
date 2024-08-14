// Variabel Perhitungan
function hitung() {
    let beratBadan = parseFloat(document.getElementById("weight").value);
    let tinggiBadan = parseFloat(document.getElementById("height").value);
    const hasilBmi =   document.getElementById("hasil2");
    const ketbmi =  document.getElementById("hasil3");
// Validasi
    if (isNaN(beratBadan) || isNaN(tinggiBadan) || beratBadan <= 0 || tinggiBadan <= 0){
        alert("masukan berat badan dan tinggi badan yang valid");
        return;false
    }
// Perhitungan Bmi & kondisi
    const bmi = (beratBadan / (tinggiBadan * tinggiBadan) * 10000).toFixed(2);
    document.getElementById("hasil1").innerHTML = bmi;  
// Hasil Bmi  
    if (bmi <= 18.5) {
        ket = "Kekurangan Berat Badan"
    }
    else if (bmi >= 18.5 && bmi <= 24.9) {
        ket = "Normal/ideal"
    }
    else if (bmi >=24.9 && bmi <= 29.9) {
        ket = "Kelebihan berat badan"
    }
    else{
        ket = "kegemukan/obesitas";
    }
    hasilBmi.innerHTML = `kamu ${ket}`;
// Penjelasan Bmi
    if (bmi <= 18.5) {
        ket2 = "Anda berada dalam kategori kekurangan berat badan, anda disarankan komsumsi lebih banyak makanan bernutrisi dan berkalori tinggi"
    }
    else if (bmi >= 18.5 && bmi <= 24.9) {
        ket2 = "Anda berada dalam kategori Normal, anda disarankan Menjaga berat badan anda saat ini dan tetap mengkomsumsi makanan bernutrisi"
    }
    else if (bmi >=24.9 && bmi <= 29.9) {
        ket2 = "Anda berada dalam kategori kelebihan berat badan, anda dianjurkan untuk menurunkan berat badan anda saat ini sampai mencapai tahap normal serta tetap mengkomsumsi makanan bernutrisi"
    }
    else{
        ket2 = "Anda berada dalam kategori obesitas, anda dianjurkan untuk menurunkan berat badan anda saat ini sampai mencapai tahap normal serta tetap mengkomsumsi makanan bernutrisi";
    }
    ketbmi.innerHTML = `${ket2}`
 }
 // Tombol Reset
function reload(){
    window.location.reload()
}


