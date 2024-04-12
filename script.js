// Слайдер начало

const slides=document.querySelectorAll('.carousel-slide')
const dots=document.querySelectorAll('.carousel-dot')
const prevBtn=document.querySelector('.carousel-prev')
const nextBtn=document.querySelector('.carousel-next')
const sliderPositionInfo=document.querySelector('.carousel-position')


let activeSlideIndex=0


// позиция в нижнем правлом углу
let setPositionSliderInfo=()=>{
    sliderPositionInfo.innerHTML=`${activeSlideIndex+1}/${slides.length}`
}



let getInitSideValue=()=>{
    slides[activeSlideIndex].classList.add('active');
    dots[activeSlideIndex].classList.add('active');
    setPositionSliderInfo();
}
getInitSideValue()


// функция для изменения слайда
const handleChangeActiveSlide=(index)=>{
 for(let slide of slides){
    if(slide.classList.contains('active')){
        slide.classList.remove('active')
    }
 }
 slides[index].classList.add('active');
 setPositionSliderInfo()
}
// переключение кругляшей
const handleChangeActiveSDoted=(index)=>{
    for(let dot of dots){
       if(dot.classList.contains('active')){
        dot.classList.remove('active')
       }
    }
    dots[index].classList.add('active');
   }

// переключение вправо
const handleNextSlide=()=>{
    if (activeSlideIndex===slides.length-1){
        activeSlideIndex=0;
    }
    else{
        activeSlideIndex++;
    }

handleChangeActiveSlide(activeSlideIndex);
handleChangeActiveSDoted(activeSlideIndex);
}

// переключение влево
const handlePrevSlide=()=>{
    if(activeSlideIndex===0){
        activeSlideIndex=slides.length-1
    } else{
        activeSlideIndex--
    }
    handleChangeActiveSlide(activeSlideIndex);
    handleChangeActiveSDoted(activeSlideIndex);
}

nextBtn.addEventListener('click',handleNextSlide)
prevBtn.addEventListener('click',handlePrevSlide)


// делаем фукцию для интеракивной круголой копки
dots.forEach((dot,index)=>{
    dot.addEventListener('click',()=>{
        activeSlideIndex=index;
        handleChangeActiveSlide(activeSlideIndex);
        handleChangeActiveSDoted(activeSlideIndex);
    })
})
// Слайдер конец
////////////////////////////////////////////////////////////////////////////////
// начало аккардиона

const accordionHeader=document.querySelectorAll('.accordion-header')
const accordionContent=document.querySelectorAll('.accordion-content')

accordionHeader.forEach((header,index)=>{
    header.addEventListener('click',()=>{
        header.classList.toggle('active');
        accordionContent[index].classList.toggle('active');
    })
})

// конец аккардиона 
///////////////////////////////////////////////////////////////////////////////
// начало табов

const tabLinks=document.querySelectorAll('.tablinks')
const tabContent=document.querySelectorAll('.tabcontent')

tabLinks[1].classList.add('active')
tabContent[1].classList.add('show')
 

tabLinks.forEach((tabLink,index)=>{
    tabLink.addEventListener('click',()=>{
        tabLinks.forEach((item)=>item.classList.remove('active'))
        tabContent.forEach((item)=>item.classList.remove('show'))

        tabLinks[index].classList.add('active')
        tabContent[index].classList.add('show')
    })
})

// конец табов
//////////////////////////////////////////////////////////////////////////////
// боковое меню начало

const nav=document.querySelector('nav')
const btnMenu=document.querySelector('#menu-button')
const menu=document.querySelector('#menu')
const links=document.querySelectorAll('a')

const handleChangeMenu=()=>{
    btnMenu.classList.toggle('active');
    btnMenu.innerHTML=btnMenu.classList.contains('active')?
    '&#10006;'
    :'&#9776;';
    nav.classList.toggle('active')
    menu.classList.toggle('active')
}

btnMenu.addEventListener('click',handleChangeMenu)

links.forEach((link)=>link.addEventListener('click',handleChangeMenu))
// боковое меню конец
/////////////////////////////////////////////////////////////////////////////
// начало затемнения страницы

const switcher=document.querySelector('#theme-switcher')

function changeType (){
    document.body.classList.toggle('dark-theme')
}

switcher.addEventListener('change',changeType)

// конец затемнения страницы
//////////////////////////////////////////////////////////////////////////////
// генератор случайного числа начало

const minValue=document.getElementById('minValue')
const maxValue=document.querySelector('#maxValue')
const generateBtn=document.getElementById('generateBtn')
const result=document.querySelector('#result')

generateBtn.addEventListener('click',()=>{
    const min=parseInt(minValue.value);
    const max=parseInt(maxValue.value);

    if( isNaN(min) || isNaN(max) || min>max){
        result.innerHTML='какаето шляпа получилась((' 
    }else{
        result.innerHTML= Math.floor(Math.random()*(max-min +1) + min)
    }
})

// генератор случайного числа