const bigMackText = 'Price of Big Mack is: '

let bigMackBasePrice = 5.66
let usBigMackPrice = bigMackBasePrice
let switzerlandBigMackPrice = 6.50
let swedenBigMackPrice = 54.00
let norwayBigMackPrice = 57.00
let canadaBigMackPrice = 6.77
let israelBigMackPrice = 17.00


let switzerlandIndex = switzerlandBigMackPrice / bigMackBasePrice  
let swedenIndex =  swedenBigMackPrice / bigMackBasePrice  
let norwayIndex =   norwayBigMackPrice / bigMackBasePrice 
let canadaIndex =  canadaBigMackPrice / bigMackBasePrice  
let israerIndex =  israelBigMackPrice/  bigMackBasePrice


let switzerlandExchangeRate = (0.92- switzerlandIndex ) / switzerlandIndex * 100
let sweedenExchangeRate = (8.72 - swedenIndex) / swedenIndex *100
let norwayExchangeRate = (9.04 - norwayIndex ) / norwayIndex *100
let canadaExchangeRate = (1.25- canadaIndex )/ canadaIndex * 100
let israelExchangeRate = (3.29 -  israerIndex) / israerIndex *100




console.log('USA -> ' + bigMackText + " US$" + usBigMackPrice)
console.log('Switzerland -> ' + bigMackText + " SFR" +  switzerlandBigMackPrice + ' and the index  is: ' + switzerlandExchangeRate.toFixed(0) )
console.log('Sweden -> ' + bigMackText + " SKR" + swedenBigMackPrice + ' and the index  is: ' + sweedenExchangeRate.toFixed(0))
console.log('Norway -> ' + bigMackText + " NKR" + norwayBigMackPrice + ' and the index  is:   ' + norwayExchangeRate.toFixed(0))
console.log('Canada  -> ' + bigMackText + " CAD" + canadaBigMackPrice + ' and the index is:  ' + canadaExchangeRate.toFixed(0))
console.log('Israel  -> ' + bigMackText + " ILS" +  israelBigMackPrice + ' and the index is: ' + israelExchangeRate.toFixed(0))








