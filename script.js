const hiddenCard = document.getElementById('hidden-main-card')

const loadMore = document.getElementById('loadMore')
function handleLoadMoreCard(){
    hiddenCard.classList.toggle('hidden')
}
loadMore.addEventListener('click',handleLoadMoreCard)
