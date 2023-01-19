let yeniSatir = "\r\n";
let metin = "1- Bakiye Görüntüleme" + yeniSatir + "2- Para Çekme" + yeniSatir + "3- Para Yatırma" + yeniSatir + "4- Çıkış" + yeniSatir + "Lütfen 1 ile 4 arasında bir değer seçiniz.";

let bakiye = 1000;

let secim = Number(prompt(metin));
switch (secim) {
    case 1:
        alert("Bakiyeniz: " + bakiye);
        break;

    case 2:
        let cekilecekTutar = Number(prompt("Çekilecek Tutarı Giriniz." + yeniSatir + "Güncel Bakiyeniz: " + bakiye + "₺"));
        if (cekilecekTutar < bakiye) {
            bakiye = (bakiye - cekilecekTutar);
            alert("Para Çekim Işlemi Başarılı!" + yeniSatir + "Güncel Bakiyeniz: " + bakiye + "₺");
        } else {
            alert("Limit Yetersiz!");
        }
        break;

    case 3:
        let yatirilanTutar = Number(prompt("Yatırılacak Tutarı Giriniz." + yeniSatir + "Güncel Bakiyeniz: " + bakiye + "₺"))
        bakiye = bakiye + yatirilanTutar
        alert("Para Yatırma Işlemi Başarılı!" + yeniSatir + "Güncel Bakiyeniz: " + bakiye + "₺");
        break;
    case 4:
        alert("Güvenli Çıkış Sağlandı!");
        break;
    default:
        alert("Lütfen Doğru Değer Giriniz!");
}