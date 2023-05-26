let hours = prompt("Введіть число в годинах:");
hoursNumber = parseInt(hours);
let seconds = hoursNumber * 3600;
let result = seconds;    <!--Я не бачу жодних причин для внесення в змінну(можна робити і без цього рядка, просто в alert замість "result" написати "seconds")-->
alert(hoursNumber + " годин(а) буде дорівнювати " + result + " секунд");