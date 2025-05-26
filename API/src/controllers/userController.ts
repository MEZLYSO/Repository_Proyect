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

  async getUser(req: Request, res: Response) {
    try {
      const { email, password } = req.body
      const user = await userService.getUser(email, password)
      if (!user) {
        sendError(res, "User not found", 500);
      } else {
        sendSucess(res, user);
      }
    } catch (err: any) {
      sendError(res, err.message);
    }
  }


}

export default new userController();
