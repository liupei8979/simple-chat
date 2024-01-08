import { CollectionReference } from '@google-cloud/firestore';
import { Inject, Injectable, Logger } from '@nestjs/common';
import { UserDocument } from 'src/documents/document.user';
import { TestUserDto } from './dto/test.dto';

@Injectable()
export class UsersService {
    private logger: Logger = new Logger('UsersService');

    constructor(
        @Inject(UserDocument.collectionName)
        private usersCollection: CollectionReference<UserDocument>,
    ) {}

    async createUser(userDocument: TestUserDto): Promise<UserDocument> {
        // 이전에 이미 email 중복 있으면 없애기.
        // 추가 해야함!


        const { name, email, password } = userDocument;
        const docRef = this.usersCollection.doc(name);
        await docRef.set({
            name,
            email,
            password,
        });
        // 결과를 알려주는 것으로 return값을 바꾸는 게 좋을 듯.
        const userDoc = await docRef.get();
        const user = userDoc.data();
        return user;
    }

    async findAll(): Promise<UserDocument[]> {
        const snapshot = await this.usersCollection.get();
        const users: UserDocument[] = [];
        snapshot.forEach(doc => users.push(doc.data()));
        return users;
    }
}
