const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']

const returnFirstTwoDrivers= arr => {
    return arr.slice(0,2);
}
console.log(returnFirstTwoDrivers(drivers));

const returnLastTwoDrivers= arr => {
    return arr.slice(-2);
}
console.log(returnLastTwoDrivers(drivers));

const selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers];

const createFareMultiplier = (int) => (fare) => int * fare;
 
const fareDoubler =createFareMultiplier(2);
console.log (fareDoubler(10));

const fareTripler=createFareMultiplier(3);
console.log (fareTripler(10));

function selectDifferentDrivers(arr,func){
    return func(arr);
}
console.log(selectDifferentDrivers(drivers,returnFirstTwoDrivers));


