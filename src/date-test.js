const fakeDate = {
    toString() {
        return Date.prototype.toString.call(new Date());
    },
    [Symbol.toStringTag]: 'Date'
};

Object.setPrototypeOf(fakeDate, Object.getPrototypeOf(new Date()));

const date = new Date();
debugger
console.log(typeof(fakeDate.getTime));
console.log(typeof(date.getTime));
// throw new Error('Invalid date!');
if (typeof(date.getTime) === 'undefined') {throw new Error('Invalid date!');}
if (typeof(fakeDate.getTime) === 'undefined') {throw new Error('Invalid date!');}

const date2 = new Date();
// console.log(Object.getOwnPropertyDescriptors(fakeDate) == Object.getOwnPropertyDescriptors(date));
// console.log(Object.getOwnPropertyDescriptors(date) == Object.getOwnPropertyDescriptors(date2));
// Object.getOwnPropertyDescriptors(date);

console.log(JSON.stringify(Object.keys(fakeDate)));
console.log(JSON.stringify(Object.keys(date)));

if(JSON.stringify(date)==JSON.stringify(date2)) {console.log("same")};

console.log('finish');