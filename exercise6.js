 //nomor 1

console.log('nomor 1');
console.log();

var number = 2;
console.log('LOOPING PERTAMA');
while(number <= 20) {
    console.log(number + ' - I love coding');
  number = number + 2;
}

var number = 20;
console.log('LOOPING KEDUA');
while(number >= 2) {
    console.log(number + ' - I will become fullstack developer');
  number = number - 2;
}
console.log();
console.log();

//nomor 2
console.log('nomor 2');
console.log();
console.log('LOOPING PERTAMA');
for(var number2 = 1; number2 <= 20; number2++) {
  console.log(number2 +' - I love coding');
}
console.log('LOOPING KEDUA');
for(var number2 = 20; number2 >= 1; number2--) {
  console.log(number2 +' - I will become fullstack developer');
}

console.log();
console.log();

//nomor 3
console.log('nomor 3');
console.log();

var counter = 1;
while(counter <=100) {
  if(counter % 2 == 0) {
    console.log('GENAP');
  }
  else {
    console.log('GANJIL');
  }
  counter ++;
}

console.log();
var counter2 = 1;
while(counter2 <=100) {
  if(counter2 % 3 == 0) {
    console.log(counter2 + ' KELIPATAN 3');
  }
  else {
    console.log('');
  }
  counter2 = counter2 + 2 ;
}

console.log();
var counter3 = 1;
while(counter3 <=100) {
  if(counter3 % 6 == 0) {
    console.log(counter3 + ' KELIPATAN 6');
  }
  else {
    console.log('');
  }
  counter3 = counter3 + 5 ;
}

console.log();
var counter4 = 1;
while(counter4 <=100) {
  if(counter4 % 10 == 0) {
    console.log(counter4 + ' KELIPATAN 10');
  }
  else {
    console.log('');
  }
  counter4 = counter4 + 9 ;
}