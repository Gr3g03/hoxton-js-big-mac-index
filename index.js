const bigMackText = 'Price of Big Mack is: US$'

let bigMackBasePrice = 5.66
let usBigMackPrice = bigMackBasePrice
let switzerlandBigMackPrice = 7.30
let swedenBigMackPrice = 6.37
let norwayBigMackPrice = 6.09
let canadaBigMackPrice = 5.29
let israelBigMackPrice = 5.35


let switzerlandIndex = switzerlandBigMackPrice / bigMackBasePrice
let swedenlandIndex = swedenBigMackPrice / bigMackBasePrice
let norwaylandIndex = norwayBigMackPrice / bigMackBasePrice
let canadalandIndex = canadaBigMackPrice / bigMackBasePrice
let israerlandIndex = israelBigMackPrice / bigMackBasePrice

console.log('USA -> ' + bigMackText + usBigMackPrice)
console.log('Switzerland -> ' + bigMackText +  switzerlandBigMackPrice + ' and the index  is: $' + switzerlandIndex.toFixed(2))
console.log('Sweden -> ' + bigMackText + swedenBigMackPrice + ' and the index  is: $' + swedenlandIndex.toFixed(2))
console.log('Norway -> ' + bigMackText + norwayBigMackPrice + ' and the index  is: $' + norwaylandIndex.toFixed(2))
console.log('Canada  -> ' + bigMackText + canadaBigMackPrice + ' and the index  is: $' + canadalandIndex.toFixed(2))
console.log('Israel  -> ' + bigMackText + israelBigMackPrice + ' and the index  is: $' + israerlandIndex.toFixed(2))
