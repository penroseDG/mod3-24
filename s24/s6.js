let n= prompt(" nha so nguyen duong bat ki di : ");
let dao = 0 ; 

while(n > 0){
    let daonguoc = n %10 ;
    dao = dao *10 + daonguoc;
    n /=  10;
}
console.log(" so dao nguo cua n la : " + n + dao  );
