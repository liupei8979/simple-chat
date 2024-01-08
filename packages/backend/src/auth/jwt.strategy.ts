import { CollectionReference } from "@google-cloud/firestore";
import { Inject, Injectable, UnauthorizedException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { UserDocument } from "src/documents/document.user";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(
        @Inject(UserDocument.collectionName)
        private userCollection: CollectionReference<UserDocument>,
        private configService: ConfigService,
    ) {
        super({
            ignoreExpiration: false,
            secretOrKey: configService.get('JWT_SECRET'),
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        })
    }

    // any??
    async validate(payload: any) {
        // 일단 이메일만 체크하자.
        const { email, password } = payload;
        const userDoc = await this.userCollection.doc(email).get();

        // 유저만 체크해도 되나?
        if(!userDoc.exists && userDoc.data().password !== password) {
            throw new UnauthorizedException();
        }

        return userDoc;
    }
}