'use strict';
let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};
function sumSalaries(salaries) {
  let sum = 0
  for (let value of Object.values(salaries)) {
    sum += value;
  }
  return sum
}

alert( sumSalaries(salaries) ); // 650

let user = {
  name: 'John',
  age: 30
};
function count(obj) {
  return (Object.values(obj).length)
}
alert( count(user) ); // 2

let salaries1 = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};
function topSalary(obj){
  let resolt = Object.entries(obj).sort((a,b) => b[1]-a[1] );
  return resolt[0]?.[0] || null
  }



alert(topSalary(salaries1));


let date = new Date(2012, 0, 3);  // 3 января 2012 года
function getWeekDay(date) {
  let day = date.getDay();
  switch (day) {
    case 0:
      return 'ПН';
      break;
    case 1:
      return 'ВТ';
      break;
    case 2:
      return 'СР';
      break;
    case 3:
      return 'ЧТ';
      break;
    case 4:
      return 'ПТ';
      break;
    case 5:
      return 'СБ';
      break;
    case 6:
      return 'ВС';
      break;
  }
}
alert( getWeekDay(date) );
let room = {
  number: 23
};

let meetup = {
  title: "Совещание",
  occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
  place: room
};

// цикличные ссылки
room.occupiedBy = meetup;
meetup.self = meetup;

alert( JSON.stringify(meetup, function replacer(key, value) {
  return (key != "" && value == meetup) ? undefined : value;
}));