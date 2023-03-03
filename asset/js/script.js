const currentDate=document.querySelector('.current-date');
const daysTag=document.querySelector('.days');
const prevNextIcon=document.querySelectorAll('.icons div')

let date=new Date();


// console.log(date.getDate())
let currYear=date.getFullYear();
let currMonth=date.getMonth();// 0dan baslayir

// console.log(currYear,currMonth)

const month=['Yanvar','Fevral','Mart','Aprel','May','Iyun','Iyul','Avqust','Sentyabr','Oktyabr','Noyabr','Dekabr']

const renderCalendar=()=>{
    let firstDateOfMonth=new Date(currYear,currMonth,1).getDay();//ayin necesi oldugu
    let lastDateOfLastMonth=new Date(currYear,currMonth,0).getDate();//evveli ayin sonuncu gunu 

    let lastDateOfMonth=new Date(currYear,currMonth+1,0).getDate();//bu ayin sonuncu gunu
    let lastDayOfMonth=new Date(currYear,currMonth,lastDateOfMonth).getDay();//


    console.log( lastDayOfMonth);

    let liTag='';

    for (let i = firstDateOfMonth; i >0; i--) {
        liTag+=`<li class='inactive'>${lastDateOfLastMonth-i+1}</li>`;       
    }

    for (let i = 1; i <= lastDateOfMonth; i++) {
        let isToday=i
                    ===date.getDate() && currMonth
                    ===new Date().getMonth() && currYear 
                    === new Date().getFullYear() ? 'active': ''
        liTag+=`<li class='${isToday}'>${i}</li>`;      
    }

    for (let i = lastDayOfMonth; i<6; i++) {
        liTag+=`<li class='inactive'>${i-lastDayOfMonth+1}</li>`;    
    }


    currentDate.innerText=`${month[currMonth]} ${currYear}`;
    daysTag.innerHTML=liTag;

    // console.log(firstDateOfMonth,lastDateOfMonth,lastDateOfLastMonth);
}


renderCalendar()

prevNextIcon.forEach(icon=>{
    icon.addEventListener("click",function(){
        currMonth=icon.id==="prev"? currMonth-1:currMonth+1;

        if(currMonth<0 || currMonth >11){
            date=new Date(currYear,currMonth);
            currMonth=date.getMonth();
            currYear=date.getFullYear();
        }else{
            date=new Date();
        }

        renderCalendar();
    });
    
});