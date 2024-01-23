let counterValue = 0
let timecounter = document.querySelector('#timecounter')
let pricecounter = document.querySelector('#pricecounter')
let clientscounter = document.querySelector('#clientscounter')

function counter(element){
    let maxValue = +element.getAttribute('data-value')
    let intervalCounter = setInterval(()=>{
        element.innerText = counterValue
        counterValue++

        if(counterValue > maxValue){
            clearInterval(intervalCounter)
            element.innerText = maxValue
        }
    }, 10000/maxValue) 

}

function startCounter(element){
    document.addEventListener('scroll', ()=>{
    if(element.getBoundingClientRect().top < window.innerHeight * .85){
        counter(element)
    }
})
}


startCounter(timecounter)
startCounter(pricecounter)
startCounter(clientscounter)