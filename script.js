const funFactText = document.getElementById("funFactText");
const randomFunFact = document.getElementById("randomFunFact");
const dogImage = document.getElementById("dogImage");
const randomDog = document.getElementById("randomDog");
const dogText = document.getElementById("dogText");
const tweetBtn = document.getElementById("tweet");
// const tweetBtn2 = document.getElementById("tweet2");


function getFunFact() {
    const randomGenUrl = "https://gervanna.github.io/random-generator/";


    fetch("https://api.aakhilv.me/fun/facts")
    .then(response => response.json())
    .then(data => {
        display = funFactText.textContent = data;
    })
    .catch(err=>console.log(err));
    tweetBtn.addEventListener('click', () => {
        tweetBtn.href = `https://twitter.com/intent/tweet?text="${display}"  —courtesy of theFunFactAPI via &url=${randomGenUrl}`;
    })
    
};

function getDog() {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(result => {
        dogImage.src = result.message
    })
    .catch(err=>console.log(err));
    // tweetBtn2.addEventListener('click', () => {
    //     tweetBtn2.href = "https://twitter.com/intent/tweet?url="+result.message;
    // })
};

randomFunFact.addEventListener('click', getFunFact);
randomDog.addEventListener('click', getDog);