// print the even number from 1 to 50 :

// let a;
// for(a=1; a<=50; a++){
//    if (a % 2 ==0){
//     console.log(a);
//    }
// }

// print the even number from 1 to 50 and their sum :

// let b, sum=0;
// for(b=1; b<=50; b++){
//     // sum += b;
//     if(b%2==0){
//        sum += b;
//     //    console.log(sum);
//     }
// }
// console.log(sum); 

// let c;
// for(c=1; c<=50; c++){
//     if(c % 5==0){
//         console.log(c);
//     }
// }


for(d=2; d<=50; d++){
    let prime=true;
    for(e=2; e<d; e++){
        if(d%e===0){
            prime =false;
            break;
        }
    }
    if(prime){
        console.log(d)
    }
}