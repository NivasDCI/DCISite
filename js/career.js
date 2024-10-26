function Application(val){
    let Hide_class  = document.querySelector('.contact');

    Hide_class.style.setProperty('display', 'block')
    console.log('Click')
}

function closingButton(val){
    let CloseTag = document.querySelector('.contact');

    CloseTag.style.setProperty('display',val)
}