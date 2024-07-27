// ==============> Lexical Scoping

// function outer(){
//         let username = "hitesh"
//         console.log("OUTER",secret);
//         function inner(){
//             let secret = "my123"
//             console.log("inner", username);
//         }
//         function innerTwo(){
//             console.log("innerTwo", username);
//             // console.log(secret);
//         }
//         inner()
//         innerTwo()

//     }
// outer();
// console.log("TOO OUTER", username);

// =======> Closure
// For this make html file with two button with id "orange" and "greeen".

// document.getElementById("orange").onclick = function(){
//     document.body.style.backgroundColor = `orange`
// }
// document.getElementById("green").onclick = function(){
//     document.body.style.backgroundColor = `green`
// }

function clickHandler(color){
    // document.body.style.backgroundColor = `${color}`

    return function(){
        document.body.style.backgroundColor = `${color}`
    }
}

document.getElementById('orange').onclick = clickHandler("orange")
document.getElementById('green').onclick = clickHandler("green")