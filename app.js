console.log("*********function********");

///* parametre ve arguman
// const add = function(n1,n2) {
//     return n1+n2
// };
// console.log(add(5,10));

// * opsiyonel parametreler*/

// function selamVer(isim="Ali"){
//     return `Merhaba ${isim}`
// }
// console.log(selamVer());

//* Rest Parametreler 

// function topla(...sayilar){
    
//     console.log(sayilar);
//     return sayilar.reduce((toplam,sayi)=> toplam+sayi,0)
// }
// console.log(topla(1,2,3,4,"12","asd",true,[1,2,3],{name:"ali"}));
// function topla(s1,s2,s3,s4){
//     return `${s1},${s2},${s3},${s4}`
// }

//* Scope Kavrami
//? Global Scope 
// let a=5;



//? Local Scope
// function ornek(){
//     let local = "Ben lokalim"
//     console.log(local);
// }
// ornek()

//? scope chain
//  let a =1
//  function up(){
//     let b=2
//     let c=3
//     console.log(a);
//     console.log(b);
//     function down(){
//     console.log(a);
//     console.log(b);
//     console.log(c);
//  }
//  down()
//  }
//  up()

//? Closures 

function out(){
    let outScope= "ben dis degiskenim"
    function infunc(){
        console.log(outScope);
    }
    return infunc
}
let newFunc= out()
newFunc()