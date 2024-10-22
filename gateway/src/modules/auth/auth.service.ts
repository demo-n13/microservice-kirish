import { InjectModel } from '@nestjs/mongoose';
import { User } from './models';
import { Injectable } from "@nestjs/common"
import { Model } from 'mongoose';

@Injectable()
export class AuthService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async googleAuth(req: any) {
    console.log(req.user);
    return 'auth success';
  }
}
