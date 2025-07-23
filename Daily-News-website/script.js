const url = 'https://newsapi.org/v2/everything?q='
const API_Key = '56e9648859ec4a9fbd52a01c3c898cf1'

window.addEventListener('load',()=>{
    fetchNews('India')
})

async function fetchNews(query){
    const res = await fetch(`${url}${query}&apiKey=${API_Key}`)
    const data = await res.json()
    bindData(data.articles)
}

function bindData(articles){
    const cardContainer = document.getElementById('main-content')
    const newsCardTemplete = document.getElementById('templete-news-card')

    cardContainer.innerHTML = ''
    
    articles.forEach(article => {
        if(!article.urlToImage) return;
        const cardClone = newsCardTemplete.content.cloneNode(true)
        fillDataInCardS(cardClone,article)
        cardContainer.appendChild(cardClone)
    });
}

function fillDataInCardS(cardClone,article){
    const newsImg = cardClone.querySelector('.card-img')
    newsImg.src = article.urlToImage;
    const newsTitle = cardClone.querySelector('#news-title')
    newsTitle.innerHTML = article.title;
    const newsSource = cardClone.querySelector('.news-source')
    const newsDesc = cardClone.querySelector('.news-desc')
    newsDesc.innerHTML = article.description;
    
    const date = new Date(article.publishedAt).toLocaleString('en-US',{
        timeZone: "Asia/Jakarta"
    }) 
    newsSource.innerHTML = `${article.source.name} ${date}`
}
