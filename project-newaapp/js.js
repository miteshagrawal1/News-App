// apikey = d2a42ca8cbee476aa8b9b27b3fb78f2f
// https://newsapi.org/v2/everything?q=apple&from=2024-02-22&to=2024-02-22&sortBy=popularity&apiKey=d2a42ca8cbee476aa8b9b27b3fb78f2f
// https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=d2a42ca8cbee476aa8b9b27b3fb78f2f

let cardscont = document.querySelector(".cardscont");
let currentnews = document.getElementById("currentnews");
let apikey = "d2a42ca8cbee476aa8b9b27b3fb78f2f";
let country = "in";
let category = "business";
let api = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apikey}`


//setting categories
function scicat() { 
    api = `https://newsapi.org/v2/top-headlines?country=${country}&category=science&apiKey=${apikey}`; 
    cardscont.innerHTML = ""; 
    currentnews.innerHTML = `"Science artilces from India"`;
    genenews();
}
function bcat() { 
    api = `https://newsapi.org/v2/top-headlines?country=${country}&category=business&apiKey=${apikey}`; 
    cardscont.innerHTML = ""; 
    currentnews.innerHTML = `"Business artilces from India"`;
    genenews();
}
function ecat() { 
    api = `https://newsapi.org/v2/top-headlines?country=${country}&category=entertainment&apiKey=${apikey}`; 
    cardscont.innerHTML = ""; 
    currentnews.innerHTML = `"Entertainment artilces from India"`;
    genenews();
}
function hcat() { 
    api = `https://newsapi.org/v2/top-headlines?country=${country}&category=health&apiKey=${apikey}`; 
    cardscont.innerHTML = ""; 
    currentnews.innerHTML = `"Health artilces from India"`;
    genenews();
}
function spocat() { 
    api = `https://newsapi.org/v2/top-headlines?country=${country}&category=sports&apiKey=${apikey}`; 
    cardscont.innerHTML = ""; 
    currentnews.innerHTML = `"Sports artilces from India"`;
    genenews();
}
function tcat() { 
    api = `https://newsapi.org/v2/top-headlines?country=${country}&category=technology&apiKey=${apikey}`; 
    cardscont.innerHTML = ""; 
    currentnews.innerHTML = `"Technology artilces from India"`;

    genenews();
}

//setting top countries
function apple() { 
    api = `https://newsapi.org/v2/everything?q=apple&from=2024-02-25&to=2024-02-25&sortBy=popularity&apiKey=d2a42ca8cbee476aa8b9b27b3fb78f2f`; 
    cardscont.innerHTML = ""; 
    currentnews.innerHTML = `"Global: Apple"`;
    genenews();
}
function tesla() { 
    api = `https://newsapi.org/v2/everything?q=tesla&from=2024-01-27&sortBy=publishedAt&apiKey=d2a42ca8cbee476aa8b9b27b3fb78f2f`; 
    cardscont.innerHTML = ""; 
    currentnews.innerHTML = `"Global: Tesla"`;
    genenews();
}
function business() { 
    api = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d2a42ca8cbee476aa8b9b27b3fb78f2f`; 
    cardscont.innerHTML = ""; 
    currentnews.innerHTML = `"Global: Business"`;
    genenews();
}
function technology() { 
    api = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=d2a42ca8cbee476aa8b9b27b3fb78f2f`; 
    currentnews.innerHTML = `"Global: Technology"`;
    cardscont.innerHTML = ""; 
    genenews();
}
function wsj() { 
    api = `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=d2a42ca8cbee476aa8b9b27b3fb78f2f`; 
    cardscont.innerHTML = ""; 
    currentnews.innerHTML = `"Wall Street Journal"`;
    genenews();
}
function us() { 
    api = `https://newsapi.org/v2/top-headlines?country=us&apiKey=d2a42ca8cbee476aa8b9b27b3fb78f2f`; 
    cardscont.innerHTML = ""; 
    currentnews.innerHTML = `"United States"`;
    genenews();
}


//main func
async function genenews() {
    for (let i = 0; i < 9; i++) {
        //api
        let res = await fetch(api);

        if (!res.ok) {
            alert("some error occured");
        }
        let data = await res.json();

        //output
        console.log(data);
        let cardbox = document.createElement("div");
        cardbox.setAttribute("class", "cardbox");

        //format
        let format = `<div class="cardbox">
    <img src="${data.articles[i].urlToImage}"
        alt="img here"><br>
    <h3 class="titleofnews" id="titleone">${data.articles[i].title}</h3>
    <div><br><div/>
    <p class="descofnews" id="descone">${data.articles[i].description}</p>
    <p class="author" id="authorone"> **${data.articles[i].source.name}**</p>
    <br>
    <a href="${data.articles[i].url}" target="_blank">View Full</a>
</div>`
        cardscont.innerHTML = cardscont.innerHTML + format;
    }
}