let ValueDisplays = document.querySelectorAll(".num");
let interval = 4000;

ValueDisplays.forEach((ValueDisplays)=>{
    let startValue = 0;
    let endValue = parseInt(ValueDisplays.getAttribute("data-val"));

    let duration = Math.floor(interval/endValue);
    let counter = setInterval(function(){
        startValue += 1,'+';
        ValueDisplays.textContent =startValue;
          if (startValue == endValue){
            clearInterval (counter)
        }
    },duration);
});