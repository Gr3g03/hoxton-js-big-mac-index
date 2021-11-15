const bigMackText = 'Price of Big Mack is: '

let bigMackBasePrice = 5.66
let usBigMackPrice = bigMackBasePrice
let switzerlandBigMackPrice = 6.50
let swedenBigMackPrice = 52.88
let norwayBigMackPrice = 52.00
let canadaBigMackPrice = 6.77
let israelBigMackPrice = 17.00


let switzerlandIndex = (bigMackBasePrice / switzerlandBigMackPrice) 
let swedenIndex =  (bigMackBasePrice /  swedenBigMackPrice) 
let norwayIndex =  (bigMackBasePrice / norwayBigMackPrice) 
let canadaIndex =  (bigMackBasePrice /  canadaBigMackPrice) 
let israerIndex =  (bigMackBasePrice / israelBigMackPrice) 


let switzerlandExchangeRate = (1.08 - switzerlandIndex ) / switzerlandIndex * 100
let sweedenExchangeRate = (0.11 - swedenIndex) / swedenIndex *100
let norwayExchangeRate = (0.12 - norwayIndex ) / norwayIndex *100
let canadaExchangeRate = (0.80 - canadaIndex )/ canadaIndex * 100
let israelExchangeRate = (0.32 -  israerIndex) / israerIndex *100




console.log('USA -> ' + bigMackText + usBigMackPrice)
console.log('Switzerland -> ' + bigMackText +  switzerlandBigMackPrice + ' and the index  is: ' + switzerlandExchangeRate.toFixed(0) )
console.log('Sweden -> ' + bigMackText + swedenBigMackPrice + ' and the index  is: ' + sweedenExchangeRate.toFixed(0))
console.log('Norway -> ' + bigMackText + norwayBigMackPrice + ' and the index  is:   ' + norwayExchangeRate.toFixed(0))
console.log('Canada  -> ' + bigMackText + canadaBigMackPrice + ' and the index is:  ' + canadaExchangeRate.toFixed(0))
console.log('Israel  -> ' + bigMackText + israelBigMackPrice + ' and the index is: ILS ' + israelExchangeRate.toFixed(0))








