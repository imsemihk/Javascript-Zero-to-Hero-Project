let dizel = 24.53,
    benzin = 22.25,
    lpg = 11.1

const yeniSatir = "\r\n";

yakitTipi = Number(prompt("Yakit Tipinizi Seçin" + yeniSatir + "1-Dizel" + yeniSatir + "2-Benzin" + yeniSatir + "3-LPG"))
if (yakitTipi == 1 || yakitTipi == 2 || yakitTipi == 3) {
    yakitLitre = Number(prompt("Alacağınız yakıt miktarı ( litre cinsinden )"))
    bakiye = Number(prompt("Bakiyenizi girin."))
    if (yakitTipi == 1) {
        // Dizel
        let odenecekTutar = dizel * yakitLitre
        if (odenecekTutar < bakiye) {
            // Bakiyeniz Yeterli
            alert("Yakıt Alımı Başarılı" + yeniSatir + "Litre başına dizel ücreti: " + dizel + yeniSatir + "Ödeme sonrası Bakiyeniz: " + (bakiye - odenecekTutar))
        } else {
            // Bakiyeniz Yetersiz
            alert("Bakiyeniz Yetersiz" + yeniSatir + "Ödenecek Tutar: " + (odenecekTutar) + yeniSatir + "Bakiyeniz: " + bakiye + yeniSatir + "Eksik Tutar: " + (odenecekTutar - bakiye))
        }



    } else if (yakitTipi == "2") {
        // Benzin
        let odenecekTutar2 = benzin * yakitLitre
        if (odenecekTutar2 < bakiye) {
            // Bakiyeniz Yeterli
            alert("Yakıt Alımı Başarılı" + yeniSatir + "Litre başına benzin ücreti: " + benzin + yeniSatir + "Ödeme sonrası Bakiyeniz: " + (bakiye - odenecekTutar2))
        } else {
            // Bakiyeniz Yetersiz
            alert("Bakiyeniz Yetersiz" + yeniSatir + "Ödenecek Tutar: " + (odenecekTutar2) + yeniSatir + "Bakiyeniz: " + bakiye + yeniSatir + "Eksik Tutar: " + (odenecekTutar2 - bakiye))
        }

    } else if (yakitTipi == "3") {
        // Lpg
        let odenecekTutar3 = lpg * yakitLitre
        if (odenecekTutar3 < bakiye) {
            // Bakiyeniz Yeterli
            alert("Yakıt Alımı Başarılı" + yeniSatir + "Litre başına lpg ücreti: " + lpg + yeniSatir + "Ödeme sonrası Bakiyeniz: " + (bakiye - odenecekTutar3))
        } else {
            // Bakiyeniz Yetersiz
            alert("Bakiyeniz Yetersiz" + yeniSatir + "Ödenecek Tutar: " + (odenecekTutar3) + yeniSatir + "Bakiyeniz: " + bakiye + yeniSatir + "Eksik Tutar: " + (odenecekTutar3 - bakiye))
        }
    }
} else {
    alert("Yakıt Değeri Yanlış Girildi!")
}