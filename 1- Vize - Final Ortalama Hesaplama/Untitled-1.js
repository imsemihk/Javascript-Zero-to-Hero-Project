let vize1 = Number(prompt("1.Vize Sınav Notunuz?"));
let vize2 = Number(prompt("2.Vize Sınav Notunuz?"));

let sonuc = ((vize1 * 0.4) + (vize2 * 0.6));

function sonucGoster() {
    if (sonuc > 60) {
        document.write("Tebrikler, Geçtiniz. | " + "Not Ortalamanız: " + sonuc)
    } else
        document.write("Geçmiş olsun, Kaldınız. | " + "Not Ortalamanız: " + sonuc)
}

sonucGoster();