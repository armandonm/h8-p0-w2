function balikKata(kata) {
  var result = '';
  var p = kata.split('  ').reverse().join('');
  for(var a=p.length-1;a>=0;a--) {
  result += p[a] + '';
  }
  return result.trim();
}

// TEST CASES
console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata('John Doe')); // eoD nhoJ
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata('Super')); // repuS