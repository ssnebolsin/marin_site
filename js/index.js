

let arrows = Array.from(document.querySelectorAll('.feedback__arrow'))
let articles = Array.from(document.querySelectorAll('.feedback__item'))
let wrapper = document.querySelector('.feedback__arricle-wrapper')
let moveValue = 0;

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
        slideMove(wrapper, item.id)
    })
}

function slideMove(elem, arrowId){

    let elemWidth = elem.offsetWidth;
    let maxMoveValue = elemWidth * (articles.length - 1)

    if(arrowId === 'arrow-right'){
       if (moveValue === maxMoveValue){
            moveValue = maxMoveValue,
            slideAnimation(elem);
       } else {
        moveValue += elemWidth;
       } 
    } else if (arrowId === 'arrow-left'){
        if(moveValue === 0 ){
            moveValue = 0,
            slideAnimation(elem);
        } else {
            moveValue -= elemWidth;
        }
          
    }

    elem.scroll({
        left: moveValue,
        behavior: "smooth",
    })
}

function slideAnimation(elem){
    let slideShake = [
        {transform: "translate3d(-1px, 0, 0)"},
        {transform: "translate3d(2px, 0, 0)"},
        {transform: "translate3d(-4px, 0, 0)"},
        {transform: "translate3d(4px, 0, 0)"}
      ];
    
    let shakeTiming = {
        duration: 200,
      };

    elem.animate(slideShake, shakeTiming)
}