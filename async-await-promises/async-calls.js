const posts = [
    {
        title: "Post 1: MagetSync -- ",
        body: "Magento - Etsy Integrator"
    },
    {
        title: "Post 2: AI Transcriber --- ",
        body: "Automatically convert speech to text"
    }
]

function getPosts() {
    
    setTimeout(() => {
        let output = '';
        
        posts.forEach(element => {
            output += `<li>${element.title} ${element.body}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
    
}


// Approach 1:  Standard Callback
/* function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback()
    }, 2000);
} */

// Approach 2: Promise
function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            
            const error = false;

            if (!error) {
                resolve();
            } else {
                console.log("Something Went Wrong");
            }
        }, 2000);
    })
}


getPosts();
createPost({title: "Part 3: Sell Businesses", body: "Enjoy Freedom"})
.then(getPosts)
.catch(error => { console.log(error)});

// Promise.all
const promise1 = Promise.resolve("Promise one");
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, "Good Bye")
})

// with fetch we must always convert the reponse to json
const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json());


Promise.all([promise1, promise2, promise3, promise4]).then(values => console.log(values));

// Async-await
async function init() {
    await createPost({title: "Part 4: Invest", body: "Get rewarded"});

    getPosts();
}

// Async-await / Fetch
async function fetchAlbums() {
    const response = await fetch("https://jsonplaceholder.typicode.com/albums");
    //const data = response.json() // Returns a promise. Best to use await
    const data = await response.json() // waits until the promise is resolved

    console.log(data);
}

init();
fetchAlbums();


