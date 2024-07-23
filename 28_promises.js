const promiseOne = new Promise((resolve, reject)=>{
    // Do asyn task
    setTimeout(()=>{
        console.log("Async task is completed");
        resolve()
    },1000)
});

promiseOne.then(()=>{
    console.log("Promise Consumed");
})

new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("Async task is completed");
        resolve()
    },1000)
}).then(()=>{
    console.log('Async 2 resolved')
})

const promiseThree = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({username: "User1", email: "example.com"
        })
    },1000)
});

promiseThree.then((user)=>{
    console.log(user);
})

const promiseFour = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error =true;
        if(!error){
            resolve({username: "User1", password:'123'})
        }
        else{
            reject('Error: Something went wrong')
        }
    },1000)
});

promiseFour
.then((user)=>{
    console.log(user);
    return user.username
})
.then((username)=>{
    console.log(username);
})
.catch((error)=>{
    console.log(error);
})
.finally(()=>{console.log("Error Resolved");})

const promiseFive = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error =true;
        if(!error){
            resolve({username: "User1", password:'123'})
        }
        else{
            reject('Error: Something went wrong')
        }
    },1000)
});

async function consumePromiseFive(){
   try {
    const response = await promiseFive
    console.log(response);
   } catch (error) {
        console.log(error);
   }
}

consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()
// THis get evaluated first beacuse fetch() uses High priority Queue or Micro Task Queue
fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.