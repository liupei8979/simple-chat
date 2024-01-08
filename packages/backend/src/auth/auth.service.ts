import { CollectionReference } from '@google-cloud/firestore';
import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserDocument } from 'src/documents/document.user';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';

@Injectable()
export class AuthService {
    constructor(
        @Inject(UserDocument.collectionName)
        private usersCollection: CollectionReference<UserDocument>,
        private jwtService: JwtService
        ) {}

    async signIn(authCredentialsDto: AuthCredentialsDto): Promise<{ accessToken: string }> {
        console.log(authCredentialsDto);
        const { email, password } = authCredentialsDto;
        const userSnapshot = await this.usersCollection.where('email', '==', email).where('password', '==', password).get();
    
        //console.log(userSnapshot);

        if(userSnapshot.empty) throw new UnauthorizedException();
        else {
            const userDoc = userSnapshot.docs[0];
            const payload = { email: userDoc.data().email, password: userDoc.data().password };
        return {
            accessToken: await this.jwtService.signAsync(payload)
        }}
    }
}
