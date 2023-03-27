let sayi = Number(prompt("Faktöriyelini bulmak istediğiniz sayının değerini giriniz."));
let carpim = 1;

for (let i = 1; 1 <= sayi; i++) {
    carpim = carpim * i;
}

alert("Sonuç : " + carpim);