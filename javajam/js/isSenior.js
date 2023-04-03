let age;

age = prompt("Enter your age:")

const output = age >= 65 ? "Free Friday Coffee Night For Seniors!" : "Enjoy Music and Make Memories";
console.log(output.charAt(0));
output.charAt(0) === 'F' ? document.getElementById('isSenior').style.color = 'Maroon' : document.getElementById('isSenior').style.color = 'black';

document.getElementById("isSenior").innerHTML = output;