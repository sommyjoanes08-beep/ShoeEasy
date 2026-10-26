const show = document.getElementById("showQuote");
const showe = document.getElementById("showAuth");
const pan = document.getElementById("lop");

pan.addEventListener("click", () => {
    fetch("https://dummyjson.com/quotes/random")
    .then(response => response.json())
    .then(data => {
        show.innerText = data.quote
        showe.innerText = data.author
        
        console.log(data.quote)
        console.log(data.author)
    })
    .catch(error => {
        console.log("Error: ", error)
    });  
})

let name ="victor";
let score = 0.5;
let cutoffmark =2000;
if (score > cutoffmark) {
    console.log("student accepted")
} else {
    console.log( "u are a poor loser go and study hard i cant believe you were my teacher you are such a loser")
}


 let victorsAccdetails = {
    name: "victor",
    age: 22,
    country: "hongari",
    netWorth: "N0.5" ,
    bvn:475837848960
}
console.log(victorsAccdetails)
console.log(victorsAccdetails.bvn)

// const namee ="victor";
// let AccountBalance = -20000;
// let loan =2000000;
// if (AccountBalance > loan) {
//     console.log("u are rich dont pay the loan again  respect+50" )
    
// } else {
//     console.log("u are poor go to the farm and farm cant believe u were a software teacher shame on u u disgrace mumu")
// }