let a =+prompt(" nhap so bat ki vao day");
let sum = 0 ;
if (a < 0 ) {
 console.log(" xin moi nhap lai ");   
}else{
    for(let i = 1; i < a ; i++){
  if( i %2===0){
    let j = i**2;
    sum += j ;
   console.log(j);
   if( sum < a ){
    console.log(" tong cac so duoc in ra la : ", +sum);
   }  
   if(j >= a){
    break;
  } 
  }
}
}