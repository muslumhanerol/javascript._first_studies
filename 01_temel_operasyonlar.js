// var toplam = sayi1 + sayi2
// undefined
// toplam
// '23'

// Number fonksiyonu = metinsel ifadeyi sayısal ifadeye çevirir.

// var toplam = Number(sayi1) + Number(sayi2)
// undefined
// toplam
// 5

//######################################################################################################

// if

var egitmen = "müslüm erol"
if (egitmen == "müslüm erol") {
    alert("Eğitmen " + "Adı: " + egitmen)
}

//######################################################################################################

// if else 
// else= şart geçerli olmağıgında çalışacak blok

var egitmen = "müslüm erol"
if (egitmen == "müslüm erol") {
    alert("Eğitmen " + "Adı: " + egitmen)
}


var egitmen = "müslüm erol"
if (egitmen == "müslüm erol") {
    alert("Eğitmen " + "Adı: " + egitmen)
} else {
    alert("Eğitmen tanınmıyor.")
}
undefined


var egitmen = "müslüm erol"
if (egitmen == "müslüm erol müs") {
    alert("Eğitmen " + "Adı: " + egitmen)
} else {
    alert("Eğitmen tanınmıyor.")
}

//######################################################################################################

//Birden fazla şart varsa?

var name = "müslüm"
if (name == "müslüm") {
    alert("İsiim =" + name);
} else if (name == "erol") {
    alert("isim= " + name);
} else {
    alert("tanınmayan kullanıcı")
}

//######################################################################################################

// || veya lı yazım = ikisinden birinin gerçekleşmesi yeterli.

var isim = "erol"
if (isim == "erol" || isim == "yasin")
    alert("kullanıcılar geldi");
else {
    alert("Tanınmayan Kullanıcı")
}

//######################################################################################################
// && = her isi şartta gerçekleşmeli.

var ad = "müslüm"
var soyad = "erol"
if (ad == "müslüm" && soyad == "erol") {
    alert(ad + " " + soyad);
}