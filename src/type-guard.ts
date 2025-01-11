type Admin = {
  role: string;
};
type User = {
  email: string;
};

const typeGuard = (user: Admin | User) => {
  if ("role" in user) {
    console.log(user.role);
  } else {
    console.log(user.email);
  }
};

export { typeGuard };
