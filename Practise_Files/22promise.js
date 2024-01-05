//The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value

const new_prom = new Promise(

    function(resolve,reject)
    {
        //Do async tasks
        //db tasks
        //network calls
        setTimeout(function()
        {
            console.log("on the set time out function");
            resolve()
        },
        
        1000)
    }
  )

new_prom.then(function()

    {
            console.log("promise consumed");
    }
)



new Promise(

    function(resolve,reject)
    {
        //Do async tasks
        //db tasks
        //network calls
        setTimeout(function()
        {
            console.log("on the set time out function 2");
            resolve()
        },
        
        1000)
    }
  ).then(function()

  {
          console.log("promise consumed2");
  }
)


new Promise(

    function(resolve,reject)
    {
        //Do async tasks
        //db tasks
        //network calls
        setTimeout(function()
        {
            console.log("on the set time out function 3");
            resolve({"username":"shanu","id":1})
        },
        
        1000)
    }
  ).then(function(userobj)

  {
          console.log("promise consumed3");
          console.log(userobj);

  }
)


new Promise(

    function(resolve,reject)
    {
        //Do async tasks
        //db tasks
        //network calls
        setTimeout(function()
        {
            console.log("on the set time out function 6");
            resolve({"username":"shanu","id":1})
        },
        
        1000)
    }
  ).then((userobj)=>

  {
          console.log("promise consumed6");
          console.log(userobj);
          return userobj.username

  })


  const myPromise = new Promise((resolve, reject) => {
    // Simulating an asynchronous operation (e.g., fetching data, API call)
    setTimeout(() => {
      const randomNumber = Math.random();
      if (randomNumber === 0.5) {
        resolve('Success!');
      } else {
        reject('Error occurred.');
      }
    }, 1000);
  });
  
  myPromise
    .then((result) => {
      console.log('Resolved:', result);
    })
    .catch((error) => {
      console.error('Rejected:', error);
    })
    .finally(() => {
      console.log('Promise execution completed.');
    });
//Promises catches exceptions well async does not handle exceptions or errorrs we need to use try catch

async function newone() {
    try {
      await myPromise;
      console.log("myPromise-myPromise");
    } catch (error) {
      console.log("Error in the async block", error);
    } finally {
      console.log("Compulsory Executable block Finally");
    }
  }
  
  // Assuming you have a promise called myPromise defined elsewhere
  // If not, you need to define myPromise before calling newone()
  newone();



async function secondone() {
    try {
      const response = await fetch('https://api.publicapis.org/entries');
      const data = await response.json()
      console.log("response",data);
    } catch (error) {
      console.log("error response", data);
    } finally {
      console.log("Compulsory response");
    }
  }
  

secondone();


fetch('https://api.publicapis.org/entries')
  .then(async (response) => {
    const data = await response.json();
    return data; // Return the data to propagate to the next then block
  })
  .catch((error) => {
    console.log("Error response:", error);
  })
  .finally(() => {
    console.log("Compulsory response");
  });
