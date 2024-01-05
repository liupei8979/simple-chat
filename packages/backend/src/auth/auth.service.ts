import { CollectionReference } from '@google-cloud/firestore';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserDocument } from 'src/documents/document.user';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';

@Injectable()
export class AuthService {
    constructor(
        private userCollection: CollectionReference<UserDocument>,
        private jwtService: JwtService
        ) {}

        async signIn(authCredentialsDto: AuthCredentialsDto): Promise<{ accessToken: string }> {
            const { email, password } = authCredentialsDto;
            const userDoc = await this.userCollection.doc(email).get();
            if(!userDoc.exists || userDoc.data().password !== password) {
                throw new UnauthorizedException();
            }
            const payload = { email: userDoc.data().email, password: userDoc.data().password };
            return {
                accessToken: this.jwtService.sign(payload)
            }
        }
}
