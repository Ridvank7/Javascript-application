
// 6. Ödevler

// JavaScript'te fonksiyonları öğrenirken, teorik bilginin yanı sıra pratik uygulamalar ve alıştırmalar da çok önemlidir. Aşağıda, öğrencilerin fonksiyonlar konusundaki bilgilerini pekiştirmelerine yardımcı olacak çeşitli örnekler ve alıştırma fikirleri bulunmaktadır.

// 1- Toplama Fonksiyonu

// function topla(x, y) {
//     return x + y;
// }

// console.log(topla(3, 4));  // 7 çıktısını verir

// 2- Çarpma Fonksiyonu

// function carp(x, y) {
//     return x  y;
// }

// console.log(carp(5, 6));  // 30 çıktısını verir

// 3- Çıkarma Fonksiyonu

// function cikar(x, y) {
//     return x - y;
// }

// 4- Bölme Fonksiyonu

// function bol(x, y) {
//     if (y === 0) {
//         console.log("Bir sayı sıfıra bölünemez!");
//         return undefined;
//     }
//     return x / y;
// }

// 5- Kullanıcıdan İki Sayı Alıp Dört Temel Matematik İşlemi Yapan Program

// kullanıcıdan alınan iki sayı ile dört temel matematik işlemi (toplama, çıkarma, çarpma, bölme) gerçekleştirilir ve sonuçlar konsola yazdırılır. Bölme işlemi sırasında bölünenin sıfır olup olmadığı kontrol edilir ve sıfıra bölme durumunda uyarı mesajı verilir.

// 6- İsme Göre Selam Verme

// function selamVer(isim) {
//     return `Merhaba, ${isim}!`;
// }

// console.log(selamVer("Ahmet"));  // "Merhaba, Ahmet!" çıktısını verir

// 7- Girilen İsme Göre Selam Verme

// Girilen isme selam veren kod bloğunu yazınız.

// 8- Dizideki Elemanları Toplama

// Bir dizi içerisindeki elemanları toplayan fonksiyonu yazınız.
// dizi = [1,2,3,4,5,6,7,8,9]
// diziString = ["elma", "armut", "kiraz", "muz"];
// console.log("**odev");

// let dizi = [1,2,3,4,5,6,7,8,9]

// const toplam = (aasdf)=> {
//     let topla = 0;
//     for(let i of aasdf){
//         topla += i 
//         console.log(i);
//     }
//     return topla
// }
// console.log(toplam(dizi));

// 9- Bir dizi içindeki en büyük sayıyı bulan fonksiyonlar:

// Dizi içerisindeki elemanlardan en büyüğünü bulan fonksiyonu yazınız.
// let dizi = [1,2,3,4,5,6,7,8,9]
// const maxNum = (sayi)=>{
//     return Math.max (...sayi)
// }

// console.log(maxNum(dizi));
// 10- Bir dizi içindeki en küçük sayıyı bulan fonksiyonlar:

// Dizi içerisindeki elemanlardan en küçüğünü bulan fonksiyonu yazınız.
// let dizi = [1,2,3,4,5,-6,7,8,9]
// const minNum = (sayi)=>{
//     return Math.min (...sayi)
// }

// console.log(minNum(dizi));
// let dizi = [1,2,3,4,5,-6,7,8,9]
// const minNum = (sayi)=>Math.min (...sayi)
// console.log(minNum(dizi));

// 11- Bir dizi içindeki sayıların ortalamasını hesaplayan bir fonksiyon:

// Dizi içerisindeki elemanların ortalamasını bulan fonksiyonu yazınız.

// let ortalama= [52,36,485,213,569,3121,56,987,1,05,42];
// function ortalamaHesap(sayilar){
// const topla = sayilar.reduce((acc,curr)=> acc+curr,0)
//  return topla / sayilar.length;
// }
// const ort = ortalamaHesap(ortalama);
// console.log(ort);

// 12- Dizideki Tek Sayıları Filtreleme

// Dizi içerisindeki tek sayıları filtreleyen fonksiyonu yazınız.

// let numbers= [52,36,485,213,569,3121,56,987,1,5,42];
// function filterOddNum (arr) {
//     return arr.filter(num => num %2 !==0)
// }
// console.log(filterOddNum(numbers));


// 13- Bir dizideki string ifadeleri uzunluklarına göre sıralayan fonksiyon:

// Dizi içerisindeki string ifadeleri uzunluklarına göre sıralayan fonksiyon yazınız.

// function stringleriUzunlugaGoreSiralama(dizi) {
//     if (dizi.length === 0) {
//       // Dizi boşsa, hata durumu veya isteğe bağlı olarak bir değer döndürebilirsiniz.
//       console.error("Dizi boş.");
//       return [];
//     }
  
//     // String ifadeleri uzunluklarına göre sıralama
//     const siraliDizi = dizi.sort((a, b) => a.length - b.length);
  
//     return siraliDizi;
//   }
  
//   // Fonksiyonu kullanma örneği:
//   const kelimeler = ["elma", "armut", "karpuz", "çilek", "kiraz"];
//   const siraliKelimeler = stringleriUzunlugaGoreSiralama(kelimeler);
//   console.log("Sıralı kelimeler:", siraliKelimeler);

// let dizi =["elma", "patlican", "armut", "maydonoz","muz", "limon", "kiraz", "cilek", "karpuz", "domates"]
// function shortString (shortStr) {
//     return dizi.sort((a,b) => a.length - b.length )
// }
// console.log(shortString(dizi));

// 14- Silindirin Hacmi

// Yarıçap ve yüksekliği verilen silindirin hacmini hesaplayan fonksiyonu yazınız

// let radius= +prompt("yaricap giriniz")
// let height= +prompt("yukseklik giriniz")

// let silindirHacim = () => console.log(`silindirin hacmi ${Math.round(Math.PI * radius * radius * height)}`);
// // console.log(silindirHacim());
// silindirHacim();
//! 14
//todo 1.Yöntem
// let r = +prompt("yarıçap gir");
// let yük = +prompt("Yükseklik gir");
// let hacim = () => console.log(`Silindir Hacmi ${Math.round(Math.PI*r*r*yük)}`)
// hacim()
//todo 2.Yöntem
// const r = +prompt("r")
// const h = +prompt("h")
// const volume = (r, h) => (Math.PI * r * r * h).toFixed(2)
// // const volume = (r, h) => (Math.PI * r * r * h).toPrecision(5)
// console.log(`r:${r}, h:${h} = Volume: ${volume(r, h)}`)
//todo 3.Yöntem
// const volumeLong = (r, h) => {
//     const result = (Math.PI * r ** 2 * h).toPrecision(5)
//     console.log(result)
//     return result
// }
// console.log(`r:${r}, h:${h} = Volume: ${volumeLong(r, h)}`)
// 15- Hesap Makinesi

// Girilen iki sayının ve yapılması istenen işlemin girildiği hesap makinesi fonksiyonunu yazınız.


// let operation = prompt("işlem")
// let calcCulation = (s1,s2) => {
// if (operation === "+")
// {
//      return s1 + s2
// }
//    else if (operation === "-") {
//     return s1 - s2
//    }
// else if (operation === "*") {
//     return s1 * s2
// }
// else if (operation === "/") {
//     return s1 / s2
// }
// else  {
//     return " yanlış giriş"
// }
// }
// console.log(calcCulation(4,9))

///*** Kullanıcı tarafından girilen bir sayının çarpanlarını (tam bolen) görüntüleyen bir kod yazın.----///

// let number = +prompt("bir sayi girinz");
//  function factors() {
//     let arry = []
//     for (let j = 1; j <= number; j++) {
//         if (number % j === 0) arry.push(j)
//         // if (number % j !== 0) arry.push(j)
//     } return arry
//  }
// console.log(factors());

//! todo
/* Arkadaşlar Cuma akşamı derse gelmeden çözmenizi istediğim sorular, ödevler. Kolay gelsin ( 1. soruyu zaten biliyorsunuz :sweat_smile:)
Bir sayı girin ve bu sayının tüm çarpanlarını (o sayıya tam bölünebilen sayıları) listeleyen bir program yazın. Örneğin, 12 sayısı için programınız 1, 2, 3, 4, 6 ve 12 değerlerini görüntülemelidir.
100 ile 1000 arasındaki sayılardan hem 3'e hem de 5'e tam bölünebilenleri bulan bir kod yazın. Bulduğunuz sayıları listeleyin.
Kullanıcıdan bir sayı alın ve bu sayı içinde yer alan çift sayıların arasına tire (-) işareti ekleyerek yeni bir string oluşturan bir program yazın. Örneğin, kullanıcı 025468 sayısını girdiğinde, programınızın çıktısı '0-254-6-8' şeklinde olmalıdır. Unutmayın, sadece çift sayıların arasına tire ekleyin.
Bir metin ve bir harf alacak bir program yazın. Programınız, verilen metinde bu harfin kaç defa geçtiğini say,malı ve sonucu göstermelidir. Örneğin, metin olarak 'hello waylo' ve harf olarak 'l' verildiğinde, programınız 'l' harfinin 3 kez geçtiğini belirtmelidir.  */

//* bu bir github calisma sayfasidir
let number = +prompt("bir sayi girinz");
 function factors() {
    let arry = []
    for (let j = 1; j <= number; j++) {
        if (number % j === 0) arry.push(j)
        // if (number % j !== 0) arry.push(j)
    } return arry
 }
console.log(factors());
