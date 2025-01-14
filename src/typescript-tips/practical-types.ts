type User = {
  id: number;
  username: string;
  email: string;
  password: string;
  role: "admin" | "user" | "guest";
  lastLogin: Date;
};

const userData: User = {
  id: 1,
  username: "john_doe",
  email: "john@example.com",
  password: "hashedPassword123",
  role: "admin",
  lastLogin: new Date(),
};

// Exclude
type UserRoles = "admin" | "user" | "guest";
type ActiveRoles = Exclude<UserRoles, "guest">;

// Extract
type AdminRole = Extract<UserRoles, "admin">;

// Omit
type SafeUser = Omit<User, "password" | "email">;

function getPublicUserInfo(user: User): SafeUser {
  const safeUser: SafeUser = {
    id: user.id,
    username: user.username,
    role: user.role,
    lastLogin: user.lastLogin,
  };
  return safeUser;
}

// Parameters
const updateUser = (id: number, fields: Partial<Omit<User, "id">>) => {};

type UpdateUserParams = Parameters<typeof updateUser>;

// Pick
type LoginCredentials = Pick<User, "email" | "password">;

// ReturnType
const getUserStatus = (user: User) => {
  return {
    isLoggedIn: true,
    lastActivity: user.lastLogin,
    currentRole: user.role,
  };
};

type UserStatus = ReturnType<typeof getUserStatus>;
