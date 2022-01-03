// better to use typer inference rather
// const person: {
//   // key: type
//   name: string;
//   age: number;
// } = {
// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string]
// } = {
//   // key: value
//   name: "Jason",
//   age: 42,
//   hobbies: ["Sports", "Cooking"],
//   // TS knows that "role" should be of type number array or string array
//   // but it doesn't know I want it to be a tuple locking in index[0] as int
//   // and index[1] as string.
//   role: [2, 'author']
// };

// person.role.push('admin');
// person.role[1] = 10;

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person = {
  // key: value
  name: "Jason",
  age: 42,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};

let favoriteActivities: string[];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby);
}

const product: {
  id: string;
  price: number;
  tags: string[];
  details: {
    title: string;
    description: string;
  };
} = {
  id: "abc1",
  price: 12.99,
  tags: ["great-offer", "hot-and-new"],
  details: {
    title: "Red Carpet",
    description: "A great carpet - almost brand-new!",
  },
};

console.log(product);
