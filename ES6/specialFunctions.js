const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32, 18];

// Map()----------------------------------------------->
// map() creates a new array from calling a function for every array element.
// map() does not execute the function for empty elements.
// map() does not change the original array.
// Syntax
// array.map(function(currentValue, index, arr), thisValue)

// let data = companies.map(function(e){
//     return e;
// })
// console.log(data);

// let companiesName = companies.map((ele, idx, arr)=>{
//     return ele.name;
// })
// console.log(companiesName);

let testMap = companies.map(function(company){
    return `${company.name} [${company.start} - ${company.end}]`
})
console.log(testMap);


// filter()---------------------------------------------->
// let retail = companies.filter((company)=>{
//     if(company.category == "Retail"){
//         return company;
//     }
// })
// console.log(retail);

// let canDrink = ages.filter(function(e){
//     if(e >= 21){
//         return e;
//     }
// });
// console.log(canDrink);

// let canDrink = [];
// for(let i = 0; i<ages.length; i++){
//     if(ages[i] >= 18){
//         canDrink.push(ages[i]);
//     }
// }
// console.log(canDrink);



// Printing all the companies details using forEach loop -------------------------------->
// companies.forEach(element => {
//     console.log(element);
// });

// companies.forEach(function printEle(e){
//     console.log(e);
// })


// Printing all the companies details using for loop ------------------>
// for(let i = 0; i<companies.length; i++){
//     console.log(companies[i]); 
// }

// console.log(companies.length);

// forEach
// filter
// map
// sort
// reduce