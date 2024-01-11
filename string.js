let string = "Apple";

function swapp(stri) {
    let string = stri.split('');
  let temp = string[0];
  string[0] = string[string.length - 1];
  string[string.length - 1] = temp;
  return string.join('')
}
console.log(swapp(string));
