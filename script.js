let hours = prompt("Введіть число в годинах:");
hoursNumber = parseInt(hours);
let seconds = hoursNumber * 3600;
<!--Я не бачу жодної причини вводити його в змінну (ви можете обійтися без цього рядка нижче, просто напишіть "seconds" замість "result" у alert)-->
let result = seconds;
alert(hoursNumber + " годин(а) буде дорівнювати " + result + " секунд");

            // Я маю на увазі так:
// let hours = prompt("Введіть число в годинах:");
// hoursNumber = parseInt(hours);
// let seconds = hoursNumber * 3600;
// alert(hoursNumber + " годин(а) буде дорівнювати " + seconds + " секунд");