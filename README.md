# Asynchronous-JS


# Asynchronous Programming

1. what is synchronous programming:<br>
-> Synchronous means the code runs in a particular sequence of instructions given in the program.<br>
-> Each instructions waits for the previos instruction to complete its execution.

2. What is Asynchronous programming:<br>
->Due to synchronous programming, sometimes Imp instructions get blocked due to some previous instructions, which causes delay in UI.<br>
-> Asynchronous code execution allows to execute next instructions immediately and dosen't block the flow.<br>

3. Callbacks<br>
-> A callback is a function passed as an argument to amother function.<br>

4. Callback Hell<br>
-> Nested callbacks stacked below one another forming a pyramid structure.(Pyramid od Doom)<br>
->This style of programming becomes difficult to understand and manage.<br>

5. Promises<br>
-> Promise is for 'eventual' completion of task. It is an object in JS.<br>
-> It is a solution to callback hell.<br>
-> it is an object in JS<br>

let promise = new Promise((resolve,reject)=>{....})<br>
->resolve and reject are callbacks provided by JS<br>

->Promises have 3 states <br>
a.pending  - the result is undefined<br>
b.fulfilled or resolved - the result is a value (fulfilled) - resolve(result)<br>
c.reject - the result is an error - reject(error)<br>

6. how to use promises<br>
-> .then() & .catch()<br>
promise.then((res)=>{...})<br>
promise.catch((err)=>{...})<br>

7. promise chaining<br>
-> chain of .then().catch()<br>

8. Async and Await<br>
-> sometimes it becomes difficult to understand promise chaing code so we can use async and await<br>
-> async function always returns a promise.<br>
--> asunc function myFunction(){....}<br>
--> await pauses the execution of its surrounding async function until the promise is settled<br>
--> await can be used only inside async functions<br>

9. IIFE: Immediately invoked function expression<br>
--> IIFE is a function that is called immediately as soon as it is defined<br>

(function (){<br>
    //...<br>
})();<br>

(()=>{<br>
    //...<br>
})();<br>

(async ()=>{<br>
    //...<br>
})();<br>
