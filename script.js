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

const d = [5, 3, 8, 5, 3, 2, 1, 2];
const g = [];

d.forEach(item => {
   if(g.includes(item, 0)){
      return;
   }else{
      g.push(item);
   }
});
console.log(g);

// task 5

