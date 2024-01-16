let a=+prompt(" nhap 1 so bat ky : ");
let sum= 0;
for(let i = 1 ; i < a ; i++){
  let q = 1/(i**3);
  sum += q ;

}
let kq = sum.toFixed(5);
console.log(kq);


