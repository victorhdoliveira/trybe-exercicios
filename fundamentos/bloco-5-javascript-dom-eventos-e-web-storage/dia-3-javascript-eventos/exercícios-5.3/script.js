function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();

  //1
 
  let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  function createDaysOfMonth(){
    let daysOfMonth = document.querySelector('#days');

    for(let index = 0; index < decemberDaysList.length; index += 1){
      let daysNumber = decemberDaysList[index];
      let daysNumberItem = document.createElement('li');
      daysNumberItem.innerHTML = daysNumber

      if (daysNumber === 24 | daysNumber === 31){
        daysNumberItem.className = 'holiday'
        daysOfMonth.appendChild(daysNumberItem)
      } else if (daysNumber === 4 | daysNumber === 11 | daysNumber === 18){
        daysNumberItem.className = 'friday'
        daysOfMonth.appendChild(daysNumberItem)
      } else if (daysNumber === 25){
        daysNumberItem.className = 'holiday friday'
        daysOfMonth.appendChild(daysNumberItem)
      } else {
        daysNumberItem.className = 'day'
        daysOfMonth.appendChild(daysNumberItem)
    }
  }
}
createDaysOfMonth()

//2

function holidays(string) {
  let buttonHolidays = document.querySelector('.buttons-container');
  let buttonBox = document.createElement('button');
  buttonBox.id = 'btn-holiday';

  buttonBox.innerHTML = string;
  buttonHolidays.appendChild(buttonBox);

}
holidays('Feriados');

//3
function holidayColor(){
let background = document.querySelector('#btn-holiday')
let getHolidays = document.querySelectorAll('.holiday')


background.addEventListener('click', function(){
  for (index = 0; index < getHolidays.length; index += 1){  
  if (getHolidays[index].style.backgroundColor !== 'green'){
    getHolidays[index].style.backgroundColor = 'green';
    getHolidays[index].style.color = 'black';
  }else{
    getHolidays[index].style.backgroundColor = 'rgb(238,238,238)';
    getHolidays[index].style.color = 'rgb(119,119,119)'
  }
  }
})
}

holidayColor()

//4
function sextou(string2){
let button2 =  document.querySelector('.buttons-container');
let buttonFriday = document.createElement('button')
buttonFriday.id = "btn-friday"

buttonFriday.innerHTML = string2
button2.appendChild(buttonFriday)
}
sextou('Sexta-feira')

//5 
function sexxtou(arr){
let friday = document.querySelector('#btn-friday')
let getFriday = document.querySelectorAll('.friday')
let phrase = 'Sexxxtou!!'

friday.addEventListener('click', function(){
  for (index = 0; index < getFriday.length; index += 1){
     if (getFriday[index].innerHTML  !== phrase) {
      getFriday[index].innerHTML = phrase;
     } else {
      getFriday[index].innerHTML = arr[index]
    }
}
}
)}
    

let fridayDays = [4, 11, 18, 25]
sexxtou(fridayDays)