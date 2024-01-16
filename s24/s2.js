let a=+prompt(" nhap so dau tien vao ");
let b=+prompt(" nhap so thu hai vao ");
let sum = 0 ;
for (let i = a + 1 ; i < b; i++) {
    sum += i;
if( a < b ){
    sum +=1; 
    console.log(" tong cac so trong khoan a va b la : " ,sum);
}else{
    console.log(" khong hop le moi nhap lai ")
}
}