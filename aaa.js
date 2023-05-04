// / first  



// function numbers(str) {
//     let res = [];
//     for (i of str) { res.push(i); }
//     let res1 = res.splice(0, 4);
//     let res2 = res.splice(1, 2);
//     let res3 = res.splice(2, 3);
//     let res4 = res.splice(3, 4);
//     let str1, str2, str3, str4 = '';
//     let obj = {};
//     for (i of res1) { str1 += i; }
//     for (i of res2) { str2 += i; }
//     for (i of res3) { str3 += i; }
//     for (i of res4) { str4 += i; }
//     obj.country = str1.replace("undefined", "");
//     obj.region = str2.replace("undefined", "");
//     obj.city = str3.replace("undefined", "");
//     obj.number = str4;
//     console.log(obj);
// }
// numbers("+998 94 180 7747");





// / second


// let coordinate = { c1: [3, 2, 4], c2: [1, 2, 2], c3: [7, 4, 1], c4: [2, 2, 2] };
// let s = [2, 3, 5];

// let res = Object.values(coordinate);
// for (i of res) {
//     let res2 = [];
//     let res1 = i;
//     for (a = 0; a < res.length - 1; a++) {
//         res2.push(Math.abs(s[a] - res1[a]) * Math.abs(s[a] - res1[a]));
//     }
//     console.log(res2);
// }




// third


// let title = "webbrain academy";
// function sorting(title) {
//     let arr = '';
//     for (i of title) { if (i == "a") { arr += i; } }
//     for (i of title) { if (i == "b") { arr += i; } }
//     for (i of title) { if (i == "c") { arr += i; } }
//     for (i of title) { if (i == "d") { arr += i; } }
//     for (i of title) { if (i == "e") { arr += i; } }
//     for (i of title) { if (i == "f") { arr += i; } }
//     for (i of title) { if (i == "g") { arr += i; } }
//     for (i of title) { if (i == "h") { arr += i; } }
//     for (i of title) { if (i == "i") { arr += i; } }
//     for (i of title) { if (i == "j") { arr += i; } }
//     for (i of title) { if (i == "k") { arr += i; } }
//     for (i of title) { if (i == "l") { arr += i; } }
//     for (i of title) { if (i == "m") { arr += i; } }
//     for (i of title) { if (i == "n") { arr += i; } }
//     for (i of title) { if (i == "o") { arr += i; } }
//     for (i of title) { if (i == "p") { arr += i; } }
//     for (i of title) { if (i == "q") { arr += i; } }
//     for (i of title) { if (i == "r") { arr += i; } }
//     for (i of title) { if (i == "s") { arr += i; } }
//     for (i of title) { if (i == "t") { arr += i; } }
//     for (i of title) { if (i == "u") { arr += i; } }
//     for (i of title) { if (i == "v") { arr += i; } }
//     for (i of title) { if (i == "w") { arr += i; } }
//     for (i of title) { if (i == "x") { arr += i; } }
//     for (i of title) { if (i == "y") { arr += i; } }
//     for (i of title) { if (i == "z") { arr += i; } }
//     let str = "";
//     for (i of arr) {
//         str += i;
//     }
//     console.log(str);
// }
// sorting(title);

// / forth

// let coordinate = { c1: [3, 2, 4], c2: [1, 2, 2], c3: [7, 4, 1], c4: [2, 2, 2], };
// let res = Object.values(coordinate);
// for (i of res) {
//     let res1 = i;
//     for (a = 0; a < res.length - 1; a++) {
//         res1[a] = res1[a] * res1[a];
//     }
//     let bb = 0;
//     for (o of res1) {
//         bb += o;
//     }
//     let q = bb / q;
//     console.log(q);
// }