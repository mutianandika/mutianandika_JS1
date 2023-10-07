// contoh if else 
var nama = "Haikal";
var nilai = 90;

if (nilai > 80 ) {
    status_nilai = " : Sangat Bagus";
}else if (nilai < 50){
    status_nilai = " : Jelek";
}else{
    status_nilai = " : Bagus";
}
console.log(nama + status_nilai);

// contoh switch case 
switch (new Date().getDay()) {
    case 0 :
    Hari = "Senin";
    break;
    case 1 :
    Hari = "Selasa";
    break;
    case 2 :
    Hari = "Rabu";
    break;
    case 3 :
    Hari = "Kamis";
    break;
    case 4 :
    Hari = "Jumat";
    break;
    case 5 :
    Hari = "Sabtu";
    break;
    case 6 :
    Hari = "Minggu";
}
console.log("Sekarang hari ke berapa : " + Hari);

// contoh for statemen 
let bentuksegitiga = 8;

        for (let i = bentuksegitiga; i >= 1; i--) {
            let pagar = "";
        for (let m = 1; m <= i; m++) {
            pagar += "#"
        }
        console.log(pagar)
        }

// contoh while
let i = 1;
        while(i < 8) {
            console.log(i);
            i++;
        }

// contoh do while 
let j = 0;
do {
    console.log(j);
    j++;
}
while(j < 5)

// contoh function
function sapa() {
    return alert("Hallo Guys !!!");
}
sapa()