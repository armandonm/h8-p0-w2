var rows1 = 5;

while(rows1 >=1) {
  console.log('*');
  rows1--;
}
console.log();

for( rows2 = 5; rows2 > 0; rows2--){
	 str = '';
	
	while(str.length < 5){
		str += '*';
	}
  console.log(str);
	}
console.log();

for(rows3 = 5; rows3 > 0; rows3--){
  str2 = '*';

  for(var j = 4; j >= rows3; j--) {
    str2 += '*';
  }
  console.log(str2);
}