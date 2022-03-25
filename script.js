const funFactText = document.getElementById("funFactText");
const randomFunFact = document.getElementById("randomFunFact");
const dogImage = document.getElementById("dogImage");
const randomDog = document.getElementById("randomDog");
const dogText = document.getElementById("dogText");


function getFunFact() {
    fetch("https://api.aakhilv.me/fun/facts")
    .then(response => response.json())
    .then(data => {
        funFactText.textContent = data;
    })
    .catch(err=>console.log(err));
};

function getDog() {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(result => {
        dogImage.src = result.message
    })
    .catch(err=>console.log(err));
};

randomFunFact.addEventListener('click', getFunFact);
randomDog.addEventListener('click', getDog); 