

let arrows = Array.from(document.querySelectorAll('.feedback__arrow'))
console.log(arrows)

let articles = Array.from(document.querySelectorAll('.feedback__item'))

let currentIndex

arrows.forEach(action)

// onclick implementation

// function action(item){
//     item.onclick = () => {
//         moveslide(item.id);
//     }
// }

// eventListener implementation

function action(item){
    item.addEventListener('click', function () {
        moveslide(item.id);

    })
}


function getcurrentindex(article, index){
    
    if(article.classList.contains('feedback__item-active')){
        console.log(`currentindex - ${index}`)
        currentIndex = index
        
        console.log(articles[currentIndex])
        // article.classList.remove('feedback__item-active')
        
    }
}

function moveslide (arrowId){
    articles.forEach(getcurrentindex)
    articles[currentIndex].classList.remove('feedback__item-active')
    let newIndex
    if(arrowId === 'arrow-right'){
        currentIndex === articles.length - 1 ?  newIndex = 0 : newIndex = currentIndex + 1
        // slideAnimation(articles[newIndex], 'right' )
    } else if (arrowId === 'arrow-left'){
        currentIndex === 0 ?  newIndex = articles.length - 1 : newIndex = currentIndex - 1
        // slideAnimation(articles[newIndex], 'left' )
    }
    
    articles[newIndex].classList.add('feedback__item-active')
}

// function slideAnimation(elem, direction){
//     let articleSlide = [
//         direction === 'left' ? { transform: "translateX(-900px)" } : { transform: "translateX(900px)" } ,
//         // {opacity: "0"}
//       ];
    
//     let articleTiming = {
//         duration: 200,
//       };
//     elem.animate(articleSlide, articleTiming)
// }
