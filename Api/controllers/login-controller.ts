
import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import { env } from "../config";

export class LoginController {
  async login(req: Request, res: Response) {
    let login = req.body;
    if(login.user === 'admin' && login.pass === 'admin'){
        const payload = {
            username: login.user,
            role: 'admin',
        }
        const t = jwt.sign(payload, env.JWT_SECRET, { expiresIn: env.JWT_EXPIRES_IN })

        res.status(200).json({ 
            message: 'Success',
            status: true,
            item: {
                token : t
            }
        });
    }else{
        res.status(400).json({ 
            message: 'Usuario o contrasenya erroneas',
            status: false 
        });
    }
  }
}