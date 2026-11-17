export function login(username: string, password: string): boolean {
  const isLoggedIn = username === "admin" && password === "password";
  if (isLoggedIn) {
    console.log(`User ${username} logged in successfully.`);
  }

  return isLoggedIn;
}
