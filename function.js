// function doubleArr(arr){
//     const result = [];
//     for(let num of arr){
//         let double = num * 2;
//         result.push(double);
//     }
//     return result;
// }

function cry(){
    console.log("BOO! HOO! I AM CRYING");
}
function rage(){
    console.log("I hate everything");
}
function repeatNtimes(action, num){
    for(let i = 0; i < num; i++){
        action();
    }
}

// repeatNtimes(rage, 15);
function pickOne(f1, f2){
    let random = Math.random().toFixed(1);
    console.log(random);
    if(random < 0.5) f1();
    else f2();
}

pickOne(cry, rage);