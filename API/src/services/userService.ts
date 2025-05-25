import { RowDataPacket } from "mysql2";
import db from "../database/db";

class userService {
  async getUsers() {
    const users = await db.query<RowDataPacket[]>("SELECT * FROM user");
    return users;
  }

}

export default new userService();
