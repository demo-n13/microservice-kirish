import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor() {
    super({
      clientID:
        '593390395099-us64sauh9b035otsn1aigtnim894isok.apps.googleusercontent.com',
      clientSecret: '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',
      // callbackURL: "",
      scopes: ['email', 'profile'],
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: any,
    cb: VerifyCallback,
  ) {
    console.log(accessToken, refreshToken, profile)

    cb(null, profile)
  }
}
