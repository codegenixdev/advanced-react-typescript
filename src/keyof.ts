type Person = {
  fullName: string;
  age: number;
  isStudent: boolean;
};

// keyof Person will give us "fullName" | "age" | "isStudent"
type PersonKeys = keyof Person;

const getPersonProperty = (person: Person, key: PersonKeys) => {
  return person[key];
};

// Usage example
const john: Person = {
  fullName: "John",
  age: 25,
  isStudent: true,
};

const property = getPersonProperty(john, "fullName");
