
//asynchronous

const result = async() =>{
    console.log('hello');
     setTimeout(()=>{
        console.log(4)
    },2)
    console.log('hello1');
}

result()


//callback

//when callbacks is paased to function argument it should be passed as sum and not sum() ->sum() means execute sum function 

function sum(a,b){
    console.log(a+b);
}

function calculator(a,b,sumCallBack){
    sumCallBack(a,b);
}
calculator(1,2,sum); //here function sum is passed as argument to another function

//callback using setTimeout

const hello = ()=>{
    console.log('hello');
}

setTimeout(hello,2000);

//callback hell

//nesting programming example

let age = 19;
if(age>=18){
    if(age>=60){
        console.log('senior');
    } else{
        console.log('middle')
    }
}else{
    console.log('child');
}

//---------------------- nested loop
for(let i=0;i<5;i++){
    let str = '';
    for(let j =0;j<5;j++){
        str=str+j;
    }
    console.log(i,str)
}

//get data

function getData(dataId){
    console.log('DATA', dataId)
};

getData(45);


// imagine if db us sending data after 2 sec

function getData1(dataId){
    //2sec
    setTimeout(()=>{
        console.log('data',dataId)
    },2000)
}
getData1(454);


// now if we want data1 after execution of data1 we want data 2 and after execution of dat2 we want data 3

function getData1(dataId){
    //2sec
    setTimeout(()=>{
        console.log('data',dataId)
    },2000)
}
getData1(1);
getData1(2);
getData1(3);

// the above function wont work since execution starts immediately for all 3 function invoke

//inorder to resolve this issue we need to use callback


function getData3(dataId,getNextData){
    setTimeout(()=>{
        console.log('data',dataId)
        if(getNextData){
            getNextData()
        }
    },2000)
}

// callback hell
getData3(1,()=>{
    console.log('getting data 2');
    getData3(2,()=>{
    console.log('getting data 3');
        getData3(3);
    });
})

// to solve callback hell Promises came into picture

// Promises
let promise = new Promise((resolve,reject)=>{....})

let promise = new Promise((resolve,reject)=>{
    console.log('i am a promise');
})
console.log(promise) // in this case promise state is pending

in this case promise is resolved

let promise1 = new Promise((resolve,reject)=>{
    console.log('i am a promise1');
    resolve(124)
})
console.log(promise1)

let promise2 = new Promise((resolve,reject)=>{
    console.log('i am a promise1');
    reject('some error')
})
console.log(promise2)

// promise example

function getData (dataId, getNexdata){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('data',dataId);
            if(getNexdata){
                getNexdata();
            }
        },2000)
    })
}

let res = getData(4);
console.log(res)  // pending


function getData1 (dataId, getNexdata){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('data',dataId);
            resolve('success')
            if(getNexdata){
                getNexdata();
            }
        },2000)
    })
}

let res2 = getData1(5);
console.log(res2) // fulfilled

function getData2 (dataId, getNexdata){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject('error')
            if(getNexdata){
                getNexdata();
            }
        },2000)
    })
}

let res3 = getData2(9);
console.log(res3); // rejected


// now will learn how to use promises

//for success case .then()
const getPromise = ()=>{
    return new Promise((resolve,reject)=>{
        console.log('inside promise');
        resolve('success')
    })
}

let promise = getPromise();
promise.then(()=>{
    console.log('Promise fulfilled')
})

// for rejected case .catch()
const getPromise = ()=>{
    return new Promise((resolve,reject)=>{
        console.log('inside promise');
        reject('error')
    })
}

let promise = getPromise();
promise.catch((err)=>{
    console.log('error',err)
})

// we can combine both

const getPromise = ()=>{
    return new Promise((resolve,reject)=>{
        console.log('inside promise');
        resolve('success');
        reject('error')
    })
}

let promise = getPromise();
promise.then((res)=>{
    console.log('Promise fulfilled',res)
}).catch((err)=>{
    console.log('err',err)
})


//promise chaining

function asyncFunc(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('some data');
            resolve('success');
        },3000)
    })
}

console.log('fetching data');
let p1 = asyncFunc();
p1.then((response)=>{
    console.log(response)
})

//now we need to fetch data2 only after data1 success we use promise chaining

function asyncFunc1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('some data1');
            resolve('success');
        },3000)
    })
}


function asyncFunc2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('some data 2');
            resolve('success');
        },3000)
    })
}


console.log('fetching data1');
let p1 = asyncFunc1();
p1.then((response)=>{
    console.log(response)
})

console.log('fetching data2');
let p2 = asyncFunc2();
p2.then((response)=>{
    console.log(response)
})

console.log('fatching data1');
let p1 = asyncFunc1();
p1.then((res)=>{
    console.log('fetching data 2');
    let p2 = asyncFunc2();
    p2.then((res)=>{})
})

//we can simplify the code

console.log('fetching data')
asyncFunc1().then((res)=>{
    console.log('fetching data 2')
    asyncFunc2().then((res)=>{

    })
})


// we can use promises in above callback function


function getData (dataId, getNexdata){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('data',dataId);
            resolve('success')
            if(getNexdata){
                getNexdata();
            }
        },2000)
    })
}

// callback hell
getData(1,()=>{
    console.log('getting data 2');
    getData(2,()=>{
    console.log('getting data 3');
        getData(3);
    });
})


function getData (dataId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('data',dataId);
            resolve('success')
        },2000)
    })
}

getData(1).then((res)=>{
    console.log(res)
    console.log('get Data 2');
    getData(2).then((res)=>{
        console.log(res)
    })
})

// another method  

getData(1).then((res)=>{
    console.log('get Data 2');
    return getData(2);
}).then((res)=>{
    return getData(3);
}).then((res)=>{
    console.log('final', res);
})


// ----------------------------------------------

// Async-await
//example of async function

async function hello(){
    console.log('hello')
}

console.log(hello()) // returns a promise

function api(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('weather data');
            resolve(200)
        },2000)
    })
}

async function getWeatherData(){
    await api(); //first call
    await api() // second call
}

getWeatherData();



//get Data example

function getData (dataId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('data',dataId);
            resolve('success')
        },2000)
    })
}

async function getAllData(){
    await getData(1);
    await getData(2);
    const res =await getData(3);
console.log(res)
     
}

getAllData()

//IIFE - immediately invoked function expression
//  in async await function we need to invoke the function in order to overcome that we can use IIFE



function getData (dataId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('data',dataId);
            resolve('success')
        },2000)
    })
}

(async function (){
    await getData(1);
    await getData(2);
    const res =await getData(3);
console.log(res)
     
})();
