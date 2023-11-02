const quoteSpace = document.querySelector(".quote");
const authorName = document.querySelector(".author .name");
const generatorBtn = document.querySelector("button");
const content = document.querySelector(".content");
const soundBtn = document.querySelector(".sound");
const copyBtn = document.querySelector(".copy");
const tweetBtn = document.querySelector(".tweet");

function generator() {
    generatorBtn.classList.add("loading");
    generatorBtn.innerHTML = "Loading quote...";
    fetch("https://api.quotable.io/random")
        .then(res => res.json())
        .then(result => {
            console.log(result);

            quoteSpace.innerHTML = `"${result.content}"`;
            authorName.innerHTML = "--" + result.author;
            generatorBtn.innerHTML = "New quote";
            // content.style.display="block";
            generatorBtn.classList.remove("loading");
        });

}

soundBtn.addEventListener("click", () => {
    //ssu is web search api that represents a speech request
    let utterance = new SpeechSynthesisUtterance(`${quoteSpace.innerHTML} by ${authorName.innerHTML}`);
    speechSynthesis.speak(utterance);
    //speak method of ss speaks the utterance
})

copyBtn.addEventListener("click", () => {
    //copy the quote text on copyBtn click
    //writeText() property writes the specified text string to system clipboard
    navigator.clipboard.writeText(quoteSpace.innerHTML);

})
tweetBtn.addEventListener("click", () => {
    let twwetUrl = `https://twitter.com/intent/tweet?url=${quoteSpace.innerHTML}`;
    window.open(twwetUrl, "_blank");
    //opening a new twitter tab with passing the quote with url

})


generatorBtn.addEventListener("click", () => {
    // content.style.display="none";
    generatorBtn.innerHTML = "Loading quote...";
    setTimeout(() => {
        generator();
    }, 2000)

})