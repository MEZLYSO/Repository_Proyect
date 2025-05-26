import { RowDataPacket } from "mysql2";
import db from "../database/db";

class userService {
  async getUsers() {
    const users = await db.query<RowDataPacket[]>("SELECT * FROM user");
    return users;
  }

  async getUser(email: string, password: string) {
    const user = await db.query<RowDataPacket[]>("SELECT * FROM `user` WHERE email = ? AND password = ?", [email, password]);
    if (Array.isArray(user) && user.length > 0) {
      return user
    }
    return null;
  }

}

export default new userService();
