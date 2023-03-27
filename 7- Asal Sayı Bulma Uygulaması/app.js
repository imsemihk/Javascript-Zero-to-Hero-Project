let sayi = Number(prompt("Lütfen bir sayı giriniz."));
let sonuc = true;


for (let i = 2; i <= Math.floor(sayi / 2); i++) {
    if (sayi % i == 0) {
        sonuc = false;
        break;
    }
}
if (sonuc == true) {
    alert(sayi + " Asaldır.")
} else {
    alert(sayi + " Asal Değildir.")
}