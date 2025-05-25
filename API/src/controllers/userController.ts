import { type Response, type Request } from "express";
import userService from "../services/userService";
import { sendSucess, sendError } from "../utils/requestHandlers";

class userController {
  async getUsers(_req: Request, res: Response) {
    try {
      const users = await userService.getUsers();
      sendSucess(res, users);
    } catch (err: any) {
      sendError(res, err.message, 500);
    }
  }


}

export default new userController();
