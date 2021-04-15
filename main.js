//Створити довільний елемент с id = text. використовуючи JavaScript, зробіть так, щоб при кліку на кнопку зникавл елемент с id="text".

const pText=document.getElementById("text")
const butt01=document.getElementById("butt01")
butt01.onclick=(event=>{
    pText.hidden=true;
});
//- Створіть кнопку, при кліку на яку, вона буде приховувати сама себе.
const butt02=document.getElementById("butt02")
butt02.onclick=(event=>{
    butt02.hidden=true;
});
//- Створити інпут який приймає вік людини та кнопку яка підтверджує дію.
const textbox01=document.getElementById("textbox01")
const butt03=document.getElementById("butt03")
butt03.onclick=(event=> {
    if (textbox01.value <= 18){
        alert("Вам на тест драйв неможна");
    }else{
    alert("Ласкаво просимо на тестдрайв");
    }
});

//Створіть меню, яке розгортається/згортається при клику
const list=document.getElementById("list")
const buttlist=document.getElementById("buttlist")
let flag=true;
buttlist.onclick=(event=> {
    list.style.display = flag ? 'none':'block';
    flag=!flag;
});

// Напишіть «Карусель» – стрічку зображень, яку можна гортати вліво-вправо нажаттям на стрілочки.

const arrImages=[
    {
        alt: 'car01',
        url: './img/car01.jpg'
    },
    {
        alt: 'car02',
        url: './img/car02.jpg'
    },
    {
        alt: 'car03',
        url: './img/car03.jpg'
    },
    {
        alt: 'car04',
        url: './img/car04.jpg'
    },
    {
        alt: 'car05',
        url: './img/car05.jpg'
    }
]
const buttLeft=document.getElementById("buttLeft");
const buttRight=document.getElementById("buttRight");
const picturesBox=document.getElementById("picturesBox");

picturesBox.style.height="300px";
picturesBox.style.width="500px";

let carIndex=0;
buttLeft.onclick=()=>{
    if (carIndex - 1 < 0){
        carIndex=arrImages.length-1;
    }else{
        carIndex=carIndex-1;
    }
    picturesBox.src=arrImages[carIndex].url
    picturesBox.alt=arrImages[carIndex].alt
}

buttRight.onclick = () =>{
    if (carIndex + 1 > arrImages.length -1){
        carIndex = 0;
    }else{
        carIndex = carIndex + 1;
    }
    picturesBox.src=arrImages[carIndex].url
    picturesBox.alt=arrImages[carIndex].alt
}