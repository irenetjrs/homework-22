// task 1

const users = [
   'Mike',
   'Nikola',
   'Tom'
]
console.log(users[1]);
users[1]='Alex';
console.log(users[1]);
users.length = 1;
console.log(users.length);

// task 2

const a = [5, 3, -4, 25, 32, -16, 6];
const b = [21, -30, 9, 5, 12, -19, 5, 25];
function compareArr(){
   if (a.length < b.length){
      alert("a < b");
   }
   else if (a.length > b.length){
      alert("a > b");
   }
   else if (a.length = b.length){
      alert("a = b");
   }
}
compareArr();

// task 3

let phrase = 'I am learning JavaScript right now';
const array = phrase.split(" ");
console.log(array);

// task 4

