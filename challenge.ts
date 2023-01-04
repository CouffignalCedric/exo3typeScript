// challenge.ts
interface User{
    name: string;
    age: number;
    prettyPrintWilder : string | number;
    wilders :  string | number;
    
}
const prettyPrintWilder = (users:any):void => {
    users.map((user:any) => {
      console.log(`${user.name} is ${user.age} years old`);
    })
  };
  
  const wilders = [];
  const user1 = { name: "Pierre", age: 23 };
  const user2 = { name: "Paul", age: 32 };
  const user3 = { name: "Jacques", age: 25 };
  wilders.push(user1);
  wilders.push(user2);
  wilders.push(user3);
  prettyPrintWilder(wilders);
//   dsh