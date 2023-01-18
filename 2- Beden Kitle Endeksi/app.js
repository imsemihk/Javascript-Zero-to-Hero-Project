let kilo = Number(prompt("Kilonuzu giriniz - Örneğin: (1.88)"));

let boy = Number(prompt("Boyunuzu metre cinsinden giriniz - Örneğin: (1.88)"));

let sonuc = kilo / (boy * 2);

if (sonuc < 18.5) {
    document.write("İdeal kilonun altında! " + "Endeksiniz: " + sonuc);
} else if (sonuc >= 18.5 && sonuc <= 24.9) {
    document.write("İdeal kilonun altında! " + "Endeksiniz: " + sonuc);
} else if (sonuc >= 25 && sonuc <= 29.9) {
    document.write("İdeal kiloda. " + "Endeksiniz: " + sonuc);
} else if (sonuc >= 30 && sonuc <= 39.9) {
    document.write("İdeal kilonun çok üstünde! (obez) " + "Endeksiniz: " + sonuc);
} else if (sonuc >= 40) {
    document.write("İdeal kilonun çok üstünde! (aşırı obez) " + "Endeksiniz: " + sonuc);
}