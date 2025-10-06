import bcrypt from "bcrypt";

// hash passowrd
export const hashPassword = async (password: string) => {
  const salt = await bcrypt.genSalt(15);
  const hashedPassword = bcrypt.hash(password, salt);
  return hashedPassword;
};

// verify password
export const verifyPassword = (password: string, hash: string) => {
  return bcrypt.compare(password, hash);
};
