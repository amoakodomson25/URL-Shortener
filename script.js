let o_link = document.getElementById("originalurl");
let n_link = document.getElementById("shorturl");
let generateBtn = document.getElementById("shortenBtn");
let copyBtn = document.getElementById("copyBtn");

generateBtn.addEventListener("click",() =>{
    let url = o_link.value;
    fetch(`https://api.shrtco.de/v2/shorten?url=${url}`)
    .then((resp)=>resp.json())
    .then((value)=>{
        n_link.value = value.result.short_link;
    })
    .catch((error)=>{
        n_link.value = "Something went wrong."
    });
});

copyBtn.addEventListener("click",() => {
    navigator.clipboard.writeText(n_link.value);
    copyBtn.innerHTML = "Copied!";

    setTimeout(()=>{
        copyBtn.innerHTML = "Copy";
    }, 1000);
});
